import { useCallback, useEffect, useState } from 'react';

// Services
import api from './api';

// Types
import { IFetchedData, IFetcherOptions } from '../interfaces/hooks/useFetcher';
import { IMetadata, IResponseWrapper } from '../interfaces/api/DataWrappers';

// Utils
import handleErrors from '../utils/handleErrors';

export function useFetcher<T = unknown>(
  URL: string,
  options: IFetcherOptions = {},
): IFetchedData<T> {
  const [data, setData] = useState<T[]>([]);
  const [meta, setMeta] = useState<IMetadata>({} as IMetadata);
  const [loading, setLoading] = useState(true);
  const [canFetch, setCanFetch] = useState(true);
  const [fetchingOptions] = useState(options);

  const fetch = useCallback(
    async (offset = 0) => {
      try {
        const params = {
          offset,
          ...fetchingOptions,
        };

        const response = await api.get<IResponseWrapper<T[]>>(URL, {
          params,
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
        setCanFetch(false);
      } finally {
        setLoading(false);
      }
    },
    [URL, fetchingOptions],
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
