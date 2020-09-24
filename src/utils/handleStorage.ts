export const saveData = async (key: string, data: unknown): Promise<void> => {
  const jsonData = JSON.stringify(data);

  localStorage.setItem(key, jsonData);

  return Promise.resolve();
};

export const loadData = async (key: string): Promise<unknown> => {
  const storedData = localStorage.getItem(key);
  const parsedData = JSON.parse(storedData || '');

  return Promise.resolve(parsedData);
};
