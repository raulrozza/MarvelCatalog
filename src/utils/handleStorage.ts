export async function saveData(key: string, data: unknown): Promise<void> {
  const jsonData = JSON.stringify(data);

  localStorage.setItem(key, jsonData);

  return Promise.resolve();
}

export async function loadData<T = unknown>(key: string): Promise<T | null> {
  const storedData = localStorage.getItem(key);
  if (!storedData) return Promise.resolve(null);

  const parsedData = JSON.parse(storedData || '') as T;

  return Promise.resolve(parsedData);
}
