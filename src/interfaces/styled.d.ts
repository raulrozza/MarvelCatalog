import 'styled-components';
import defaultColors from '../config/defaultColors';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof defaultColors;
  }
}
