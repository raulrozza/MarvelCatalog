import React from 'react';

// Config
import defaultColors from '../config/defaultColors';

// Styles
import { ThemeProvider } from 'styled-components';
import Global from '../styles/Global';

const theme = {
  colors: defaultColors,
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
