import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { readStorage, writeStorage } from '../lib/storage';
import { DEMO_USER } from '../data/demoUser';

const SESSION_KEY = 'adminpanel:session';


const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => readStorage(SESSION_KEY, null));

  const login = useCallback(async (username, password) => {
    await new Promise((resolve) => setTimeout(resolve, 600));
    if (username === DEMO_USER.username && password === DEMO_USER.password) {
      const session = { username };
      writeStorage(SESSION_KEY, session);
      setUser(session);
      return true;
    }
    return false;
  }, []);

  const logout = useCallback(() => {
    writeStorage(SESSION_KEY, null);
    setUser(null);
  }, []);

  const value = useMemo(() => ({ user, login, logout }), [user, login, logout]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth debe usarse dentro de AuthProvider');
  return context;
};
