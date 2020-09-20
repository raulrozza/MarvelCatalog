import { IImage, IResourceList } from './Generals';

export interface ICharacter {
  id: number;
  name: string;
  description?: string;
  thumbnail: IImage;
  comics: IResourceList;
  stories: IResourceList;
  events: IResourceList;
  series: IResourceList;
}
