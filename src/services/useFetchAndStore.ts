import { useEffect, useState } from 'react';

// Hooks
import { useFetchAll } from './useFetcherAll';

// Utils
import { loadData, saveData } from '../utils/handleStorage';
import { IFetchedAndStoredData } from '../interfaces/hooks/useFetchAndStore';

export default function useFetchAndStore<T = unknown>(
  URL: string,
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
  }, [URL, toggleFetching]);

  useEffect(() => {
    if (!fetchLoading) {
      setStorageData(data);
      saveData(URL, data);
    }
  }, [fetchLoading, URL, data]);

  return {
    data: storageData,
    loading,
  };
}
