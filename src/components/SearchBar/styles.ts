import styled, { css } from 'styled-components';

// Types
import { SearchBarContainerProps } from './types';

export const Container = styled.div<SearchBarContainerProps>`
  display: flex;

  color: ${({ theme }) => theme.colors.textLightWhite};

  input {
    background-color: transparent;

    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.textWhite};

    padding: 0;

    width: 0;

    transition: all 0.2s;
  }

  button {
    padding: 0.4rem;
    margin-right: 0.8rem;

    border: none;

    background-color: transparent;

    cursor: pointer;

    font-size: 1.8rem;

    display: flex;
    align-items: flex-end;

    transition: font-size 0.1s;
  }

  ${({ focused }) =>
    focused &&
    css`
      input {
        width: 24rem;

        padding: 0 0.4rem;
      }

      button {
        font-size: 2rem;
      }
    `}

  &:hover {
    input {
      width: 24rem;

      padding: 0 0.4rem;
    }

    button {
      font-size: 2rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    input {
      width: 16rem;
      max-width: 16rem;

      padding: 0 0.4rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-top: 0.8rem;

    input {
      margin-left: 0.8rem;
    }

    ${({ focused }) =>
      focused &&
      css`
        button {
          font-size: 1.8rem;
        }
      `}

    &:hover {
      button {
        font-size: 1.8rem;
      }
    }
  }
`;
