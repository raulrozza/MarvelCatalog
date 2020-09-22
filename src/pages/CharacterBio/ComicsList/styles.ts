import styled from 'styled-components';
import { Section } from '../styles';

export const Container = styled(Section)`
  display: flex;
  flex-direction: column;

  max-width: 80rem;

  .list {
    margin-top: 0.8rem;

    display: flex;

    overflow-x: auto;

    scrollbar-width: thin;

    .comic {
      position: relative;

      margin: 0 0.4rem;

      cursor: pointer;

      img {
        opacity: 1;
        transition: opacity 0.3s;

        &:hover {
          opacity: 0.7;
        }
      }

      a {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        text-align: center;

        display: flex;
        align-items: center;
        justify-content: center;

        padding: 0.4rem;

        font: 700 1.2rem ${({ theme }) => theme.fonts.special};

        background-color: ${({ theme }) => theme.colors.primaryTransparent};

        color: ${({ theme }) => theme.colors.textWhite};

        opacity: 0;

        transition: opacity 0.3s;

        &:hover {
          opacity: 1;
        }
      }
    }
  }
`;
