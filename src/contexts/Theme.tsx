import React from 'react';

// Config
import defaultBreakpoints from '../config/defaultBreakpoints';
import defaultColors from '../config/defaultColors';
import defaultFonts from '../config/defaultFonts';

// Styles
import { ThemeProvider } from 'styled-components';
import Global from '../styles/Global';

const theme = {
  colors: defaultColors,
  fonts: defaultFonts,
  breakpoints: defaultBreakpoints,
};

const Theme: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
      <Global />
    </ThemeProvider>
  );
};

export default Theme;
