import { useEffect, useState } from 'react';

// Hooks
import { useFetcher } from './useFetcher';

// Types
import { IFetchAllData } from '../interfaces/hooks/useFetchAll';

export function useFetchAll<T = unknown>(URL: string): IFetchAllData<T> {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<T[]>([]);
  const { data: fetcherData, canFetch, fetchNext } = useFetcher<T>(URL, {
    limit: 100,
  });

  useEffect(() => {
    if (canFetch) fetchNext();
    else {
      setData(fetcherData);
      setLoading(false);
    }
  }, [canFetch, fetcherData, fetchNext]);

  return {
    data,
    loading,
  };
}
