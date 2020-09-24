import { ICharacter } from '../../interfaces/api/Characters';

export interface IReducedCharacters
  extends Pick<ICharacter, 'id' | 'thumbnail' | 'name'> {
  comics: number;
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

export const sortCharactersByComicLength = (
  characters: IReducedCharacters[],
): IReducedCharacters[] => {
  return characters.sort((a, b) => b.comics - a.comics);
};
