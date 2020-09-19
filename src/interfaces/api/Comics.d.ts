import { IImage } from './Generals';

export interface IComic {
  id: number;
  title: string;
  description: string;
  variantDescription?: string;
  pageCount: number;
  thumbnail: IImage;
}
