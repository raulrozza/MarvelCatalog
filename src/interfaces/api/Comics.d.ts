import { ICreators, IImage, IResource } from './Generals';

export interface IComic {
  id: number;
  title: string;
  description?: string;
  variantDescription?: string;
  collections: IResource[];
  series?: IResource;
  pageCount: number;
  thumbnail: IImage;
  images: IImage[];
  creators: ICreators;
  characters: {
    available: number;
  };
}
