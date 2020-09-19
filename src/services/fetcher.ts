import { useCallback, useEffect, useState } from 'react';

// Services
import api from './api';

// Types
import { IFetchedData } from '../interfaces/hooks/useFetcher';
import { IMetadata, IResponseWrapper } from '../interfaces/api/DataWrappers';

export function useFetcher<T = unknown[]>(URL: string): IFetchedData<T> {
  const [data, setData] = useState<T | null>(null);
  const [meta, setMeta] = useState<IMetadata>({} as IMetadata);
  const [loading, setLoading] = useState(true);

  const fetch = useCallback(async () => {
    try {
      const response = await api.get<IResponseWrapper<T>>(URL);

      const metadata = response.data.data;

      setMeta({
        count: metadata.count,
        limit: metadata.limit,
        offset: metadata.offset,
        total: metadata.total,
      });

      setData(metadata.results);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [URL]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return {
    data,
    meta,
    loading,
  };
}
