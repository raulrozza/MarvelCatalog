import { IMetadata } from '../api/DataWrappers';

export interface IFetchedData<T> {
  data: T[];
  meta: IMetadata;
  loading: boolean;
  canFetch: boolean;
  fetchNext: (filters?: IFetcherFilters | null) => void;
  refresh: (filters?: IFetcherFilters | null) => void;
}

export interface IFetcherParams {
  limit?: number;
}

export interface IFetcherFilters {
  title?: string;
  name?: string;
}
