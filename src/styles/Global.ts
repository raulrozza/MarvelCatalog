import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`
  ${({ theme }) => css`
    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }

    body,
    html,
    #root {
      height: 100%;
      background-color: ${theme.colors.background};
    }

    body,
    input,
    textarea,
    button {
      font-family: 'Roboto', sans-serif;
      color: ${theme.colors.textWhite};
    }

    a {
      color: ${theme.colors.boldText};
      transition: color 0.2s;

      &:hover {
        color: ${theme.colors.textSelected};
      }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-family: 'Open Sans', sans-serif;
    }
  `}
`;
