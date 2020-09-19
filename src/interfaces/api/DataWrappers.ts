export interface IMetadata {
  offset: number;
  limit: number;
  total: number;
  count: number;
}

interface IDataContainer<T> extends IMetadata {
  results: T;
}

export interface IResponseWrapper<T> {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  data: IDataContainer<T>;
  etag: string;
}
