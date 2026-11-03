import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { seedData } from '../data/seed';
import { addItem, removeItem, updateItem } from '../lib/collection';
import { readStorage, writeStorage } from '../lib/storage';

const DATA_KEY = 'adminpanel:data';

const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(() => readStorage(DATA_KEY, seedData));

  useEffect(() => {
    writeStorage(DATA_KEY, data);
  }, [data]);

  const add = useCallback(
    (resource, values) => setData((prev) => ({ ...prev, [resource]: addItem(prev[resource], values) })),
    []
  );
  const update = useCallback(
    (resource, id, values) =>
      setData((prev) => ({ ...prev, [resource]: updateItem(prev[resource], id, values) })),
    []
  );
  const remove = useCallback(
    (resource, id) => setData((prev) => ({ ...prev, [resource]: removeItem(prev[resource], id) })),
    []
  );
  const reset = useCallback(() => setData(seedData), []);

  const value = useMemo(() => ({ data, add, update, remove, reset }), [data, add, update, remove, reset]);
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useData = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error('useData debe usarse dentro de DataProvider');
  return context;
};
