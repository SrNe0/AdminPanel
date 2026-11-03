export const nextId = (items) =>
  items.reduce((max, item) => Math.max(max, item.id), 0) + 1;

export const addItem = (items, values) => [...items, { ...values, id: nextId(items) }];

export const updateItem = (items, id, values) =>
  items.map((item) => (item.id === id ? { ...item, ...values, id } : item));

export const removeItem = (items, id) => items.filter((item) => item.id !== id);

export const filterItems = (items, query) => {
  const term = query.trim().toLowerCase();
  if (!term) return items;
  return items.filter((item) =>
    Object.values(item).some((value) => String(value).toLowerCase().includes(term))
  );
};
