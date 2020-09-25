import { ICharacter } from '../../interfaces/api/Characters';
import { IComic } from '../../interfaces/api/Comics';

export interface IReducedCharacters
  extends Pick<ICharacter, 'id' | 'thumbnail' | 'name'> {
  comics: number;
}

export interface IReducedComics extends Pick<IComic, 'id' | 'title'> {
  characters: number;
}

export const extractCharactersData = (
  characters: ICharacter[],
): IReducedCharacters[] => {
  return characters.map(character => {
    return {
      id: character.id,
      thumbnail: character.thumbnail,
      name: character.name,
      comics: character.comics.available,
    };
  });
};

export const extractComicsData = (comics: IComic[]): IReducedComics[] => {
  return comics.map(comic => {
    return {
      id: comic.id,
      title: comic.title,
      characters: comic.characters.available,
    };
  });
};
