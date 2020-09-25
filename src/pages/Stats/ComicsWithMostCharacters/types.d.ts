import { DefaultTheme } from 'styled-components';
import { IReducedComics } from '../utils';

export interface ComicsWithMostCharactersProps {
  data: IReducedComics[];
  theme: DefaultTheme;
}
