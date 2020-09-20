import { ICollection, ICreators, IImage, ISeries } from './Generals';

export interface IComic {
  id: number;
  title: string;
  description?: string;
  variantDescription?: string;
  collections: ICollection[];
  series?: ISeries;
  pageCount: number;
  thumbnail: IImage;
  images: IImage[];
  creators: ICreators;
}
