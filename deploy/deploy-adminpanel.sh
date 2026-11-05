#!/usr/bin/env bash
# Despliegue de AdminPanel en el servidor, con comprobación de salud y rollback.
#
# Se instala como /usr/local/sbin/deploy-adminpanel (root:root, 0755). NO se ejecuta
# desde el repo: el usuario "deploy" solo puede lanzarlo vía sudo, y como el archivo
# es de root, un cambio en el repo no puede alterar lo que corre con privilegios.
#
# Uso: deploy-adminpanel <sha-de-40-caracteres>
set -euo pipefail

SHA="${1:-}"
[[ "$SHA" =~ ^[0-9a-f]{40}$ ]] || { echo "uso: deploy-adminpanel <sha de 40 caracteres>" >&2; exit 2; }

APP=/home/srne0/Projects/AdminPanel
OWNER=srne0

# Un solo despliegue a la vez
exec 9>/var/lock/deploy-adminpanel.lock
flock -n 9 || { echo "ya hay un despliegue en curso" >&2; exit 4; }

git_()    { sudo -u "$OWNER" git -C "$APP" "$@"; }
compose() { docker compose --project-directory "$APP" "$@"; }

healthy() {
  local cid status
  for _ in $(seq 1 40); do
    cid=$(compose ps -q web 2>/dev/null || true)
    if [ -n "$cid" ]; then
      status=$(docker inspect -f '{{.State.Health.Status}}' "$cid" 2>/dev/null || true)
      [ "$status" = "healthy" ] && return 0
    fi
    sleep 3
  done
  return 1
}

PREV=$(git_ rev-parse HEAD)
echo ">> actual: ${PREV:0:7}   nuevo: ${SHA:0:7}"

git_ fetch --quiet origin main
# Solo se despliegan commits que ya están en origin/main (es decir, que pasaron por la PR y el CI)
git_ merge-base --is-ancestor "$SHA" origin/main || { echo "el commit no está en origin/main" >&2; exit 3; }

git_ checkout --quiet main
git_ merge --ff-only --quiet "$SHA"

if compose up -d --build && healthy; then
  echo ">> desplegado OK: ${SHA:0:7}"
  docker image prune -f >/dev/null 2>&1 || true
  exit 0
fi

echo ">> FALLÓ el despliegue; rollback a ${PREV:0:7}" >&2
git_ reset --hard --quiet "$PREV"
compose up -d --build || true
if healthy; then
  echo ">> rollback OK" >&2
else
  echo ">> ATENCIÓN: el rollback tampoco quedó saludable" >&2
fi
exit 1
