import { useEffect, useState } from 'react';

// Hooks
import { useFetcher } from './useFetcher';

// Types
import { IFetchAllData } from '../interfaces/hooks/useFetchAll';

export function useFetchAll<T = unknown>(
  URL: string,
  fetchOnInit = true,
): IFetchAllData<T> {
  const [fetchingEnabled, setFetchingEnabled] = useState(fetchOnInit);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<T[]>([]);
  const {
    data: fetcherData,
    canFetch,
    fetchNext,
    loading: fetching,
  } = useFetcher<T>(URL, {
    limit: 100,
  });

  useEffect(() => {
    if (fetching || !fetchingEnabled) return;

    setData(fetcherData);

    // The original condition is only canFetch. But since there is to many data in the endpoints, I must clamp it.
    if (canFetch && fetcherData.length < 4000) fetchNext();
    else setLoading(false);
  }, [fetching, fetcherData, fetchingEnabled, canFetch]);

  return {
    data,
    loading,
    toggleFetching: setFetchingEnabled,
  };
}
