import { useEffect, useState } from 'react';

// Hooks
import { useFetchAll } from './useFetcherAll';

// Utils
import { loadData, saveData } from '../utils/handleStorage';
import { IFetchedAndStoredData } from '../interfaces/hooks/useFetchAndStore';

export default function useFetchAndStore<T = unknown>(
  URL: string,
  orderMethod: (a: T, b: T) => number = () => 0,
  limit = 20,
): IFetchedAndStoredData<T> {
  const [loading, setLoading] = useState(true);
  const [storageData, setStorageData] = useState<T[] | null>(null);
  const { loading: fetchLoading, data, toggleFetching } = useFetchAll<T>(
    URL,
    false,
  );

  useEffect(() => {
    loadData<T[]>(URL)
      .then(data => {
        if (data) {
          setStorageData(data);
          setLoading(false);
        } else toggleFetching(true);
      })
      .catch(console.error);
  }, [URL]);

  useEffect(() => {
    if (fetchLoading) return;

    const orderedData = data.sort(orderMethod);
    const slicedData = orderedData.slice(0, limit);

    saveData(URL, slicedData);
    setStorageData(slicedData);
    setLoading(false);
  }, [fetchLoading, URL, data]);

  return {
    data: storageData,
    loading,
  };
}
