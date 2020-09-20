import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`
  ${({ theme }) => css`
    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }

    :root {
      font-size: 60%;
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
      font: 300 1.6rem ${theme.fonts.default};
      color: ${theme.colors.textWhite};
    }

    a {
      transition: color 0.2s;
      color: ${theme.colors.textWhite};

      text-decoration: none;

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
      font-family: ${theme.fonts.special};
    }
  `}
`;
