interface ICreator {
  resourceURI: string;
  name: string;
  role: string;
}

export interface ICreators {
  available: number;
  collectionURI: string;
  items: ICreator[];
}

export interface IResource {
  resourceURI: string;
  name: string;
}

export interface IResourceList {
  available: number;
  returned: number;
  collectionURI: number;
  items: IResource[];
}

export interface IImage {
  path: string;
  extension: string;
}
