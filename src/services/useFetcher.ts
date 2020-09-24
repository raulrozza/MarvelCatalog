import { useCallback, useEffect, useState } from 'react';

// Services
import api from './api';

// Types
import {
  IFetchedData,
  IFetcherFilters,
  IFetcherParams,
} from '../interfaces/hooks/useFetcher';
import {
  IDataContainer,
  IMetadata,
  IResponseWrapper,
} from '../interfaces/api/DataWrappers';

// Utils
import handleErrors from '../utils/handleErrors';

export function useFetcher<T = unknown>(
  URL: string,
  params: IFetcherParams = {},
): IFetchedData<T> {
  const [data, setData] = useState<T[]>([]);
  const [meta, setMeta] = useState<IMetadata>({} as IMetadata);
  const [loading, setLoading] = useState(true);
  const [canFetch, setCanFetch] = useState(true);
  const [fetchingParams] = useState(params);

  const commitFetch = useCallback(
    (metadata: IDataContainer<T[]>, append: boolean) => {
      setMeta({
        count: metadata.count,
        limit: metadata.limit,
        offset: metadata.offset,
        total: metadata.total,
      });

      setCanFetch(metadata.offset + metadata.count < metadata.total);

      if (append) setData(data => [...data, ...metadata.results]);
      else setData(metadata.results);
    },
    [],
  );

  const fetchFromAPI: (
    offset?: number,
    requestFilters?: IFetcherFilters | null,
    append?: boolean,
  ) => Promise<void> = useCallback(
    async (offset = 0, requestFilters = {}, append = true) => {
      try {
        const params = {
          offset,
          ...fetchingParams,
          ...requestFilters,
        };

        const response = await api.get<IResponseWrapper<T[]>>(URL, {
          params,
        });

        const metadata = response.data.data;

        commitFetch(metadata, append);
      } catch (error) {
        handleErrors(error);
        setCanFetch(false);
      } finally {
        setLoading(false);
      }
    },
    [URL, fetchingParams, commitFetch],
  );

  const fetchNext = useCallback(
    async (filters: IFetcherFilters | null = null) => {
      const { total, count, offset } = meta;

      const nextOffset = offset + count;

      if (nextOffset < total) fetchFromAPI(nextOffset, filters);
    },
    [fetchFromAPI, meta],
  );

  const refresh = useCallback(
    async (filters: IFetcherFilters | null = null) => {
      setLoading(true);

      fetchFromAPI(0, filters, false);
    },
    [fetchFromAPI],
  );

  useEffect(() => {
    fetchFromAPI();
  }, [fetchFromAPI]);

  return {
    data,
    meta,
    loading,
    canFetch,
    fetchNext,
    refresh,
  };
}
