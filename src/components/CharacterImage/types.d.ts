import { IImage } from '../../interfaces/api/Generals';
import { Size } from '../../utils/getImageURL';

export interface CharacterImageProps {
  thumbnail: IImage;
  alt: string;
  size: Size;
}
