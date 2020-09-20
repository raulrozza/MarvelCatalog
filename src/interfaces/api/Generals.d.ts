interface ICreator {
  resourceURI: string;
  name: string;
  role: penciler;
}

export interface ICreators {
  available: integer;
  collectionURI: string;
  items: ICreator[];
}

export interface ICollection {
  resourceURI: string;
  name: string;
}

export interface IImage {
  path: string;
  extension: string;
}

export interface ISeries {
  resourceURI: string;
  name: string;
}
