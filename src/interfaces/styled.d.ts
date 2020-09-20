import 'styled-components';
import defaultColors from '../config/defaultColors';
import defaultFonts from '../config/defaultFonts';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof defaultColors;
    fonts: typeof defaultFonts;
  }
}
