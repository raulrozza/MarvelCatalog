import { IImage } from '../../interfaces/api/Generals';
import { Size } from '../../utils/getImageURL';

export interface ComicImageProps {
  thumbnail: IImage;
  alt: string;
  size: Size;
}
