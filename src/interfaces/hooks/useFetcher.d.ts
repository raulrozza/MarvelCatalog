import { IMetadata } from '../api/DataWrappers';

export interface IFetchedData<T> {
  data: T[];
  meta: IMetadata;
  loading: boolean;
  canFetch: boolean;
  fetchNext: () => void;
}

export interface IFetcherOptions {
  limit?: number;
}
