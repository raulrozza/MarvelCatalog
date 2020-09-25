import { DefaultTheme } from 'styled-components';
import { IReducedCharacters } from '../utils';

export interface CharactersInComicsProps {
  data: IReducedCharacters[];
  theme: DefaultTheme;
}
