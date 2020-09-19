import { IMetadata } from '../api/DataWrappers';

export interface IFetchedData<T> {
  data: T | null;
  meta: IMetadata;
  loading: boolean;
}
