import { describe, expect, it } from 'vitest';
import { addItem, filterItems, nextId, removeItem, updateItem } from './collection';

const items = [
  { id: 1, nombre: 'Ana', email: 'ana@example.com' },
  { id: 3, nombre: 'Luis', email: 'luis@example.com' },
];

describe('collection', () => {
  it('calcula el siguiente id a partir del máximo', () => {
    expect(nextId(items)).toBe(4);
    expect(nextId([])).toBe(1);
  });

  it('agrega un elemento sin mutar la lista original', () => {
    const result = addItem(items, { nombre: 'Eva', email: 'eva@example.com' });
    expect(result).toHaveLength(3);
    expect(result[2].id).toBe(4);
    expect(items).toHaveLength(2);
  });

  it('actualiza un elemento conservando su id', () => {
    const result = updateItem(items, 1, { nombre: 'Ana María', id: 99 });
    expect(result[0]).toEqual({ id: 1, nombre: 'Ana María', email: 'ana@example.com' });
  });

  it('elimina un elemento por id', () => {
    expect(removeItem(items, 1).map((i) => i.id)).toEqual([3]);
  });

  it('filtra sin distinguir mayúsculas en cualquier campo', () => {
    expect(filterItems(items, 'LUIS')).toHaveLength(1);
    expect(filterItems(items, 'example.com')).toHaveLength(2);
    expect(filterItems(items, '  ')).toHaveLength(2);
    expect(filterItems(items, 'zzz')).toHaveLength(0);
  });
});
