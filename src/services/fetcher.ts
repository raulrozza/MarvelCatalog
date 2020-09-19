import { useCallback, useEffect, useState } from 'react';

// Services
import api from './api';

// Types
import { IFetchedData } from '../interfaces/hooks/useFetcher';
import { IMetadata, IResponseWrapper } from '../interfaces/api/DataWrappers';

// Utils
import handleErrors from '../utils/handleErrors';

export function useFetcher<T = unknown>(URL: string): IFetchedData<T> {
  const [data, setData] = useState<T[]>([]);
  const [meta, setMeta] = useState<IMetadata>({} as IMetadata);
  const [loading, setLoading] = useState(true);
  const [canFetch, setCanFetch] = useState(true);

  const fetch = useCallback(
    async (offset = 0) => {
      try {
        const response = await api.get<IResponseWrapper<T[]>>(URL, {
          params: {
            offset,
          },
        });

        const metadata = response.data.data;

        setMeta({
          count: metadata.count,
          limit: metadata.limit,
          offset: metadata.offset,
          total: metadata.total,
        });

        setCanFetch(metadata.offset + metadata.count < metadata.total);

        setData(data => [...data, ...metadata.results]);
      } catch (error) {
        handleErrors(error);
      } finally {
        setLoading(false);
      }
    },
    [URL],
  );

  const fetchNext = () => {
    const { total, count, offset } = meta;

    const nextOffset = offset + count;

    if (nextOffset < total) fetch(nextOffset);
  };

  useEffect(() => {
    fetch();
  }, [fetch]);

  return {
    data,
    meta,
    loading,
    canFetch,
    fetchNext,
  };
}
