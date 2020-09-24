import { useEffect, useState } from 'react';

// Hooks
import { useFetcher } from './useFetcher';

// Types
import { IFetchAllData } from '../interfaces/hooks/useFetchAll';

export function useFetchAll<T = unknown>(URL: string): IFetchAllData<T> {
  const [loading, setLoading] = useState(true);
  const { data, canFetch, fetchNext } = useFetcher<T>(URL, { limit: 100 });

  useEffect(() => {
    console.log(data);

    if (canFetch) fetchNext();
    else setLoading(false);
  }, [canFetch, fetchNext]);

  return {
    data,
    loading,
  };
}
