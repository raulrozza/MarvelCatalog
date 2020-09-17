import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`
        * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }

        body,
        html,
        #root {
            height: 100%;
        }

        body,
        input,
        textarea,
        button {
            font-family: 'Roboto', sans-serif;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
            font-family: 'Open Sans', sans-serif;
        }
`;
