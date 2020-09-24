export interface IFetchAllData<T> {
  data: T[];
  loading: boolean;
  toggleFetching: (value: boolean) => void;
}
