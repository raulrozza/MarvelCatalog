import 'styled-components';
import defaultBreakpoints from '../config/defaultBreakpoints';
import defaultColors from '../config/defaultColors';
import defaultFonts from '../config/defaultFonts';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof defaultColors;
    fonts: typeof defaultFonts;
    breakpoints: typeof defaultBreakpoints;
  }
}
