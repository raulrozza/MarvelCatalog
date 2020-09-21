import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Types
import { NavbarContainerProps } from './types';

export const Container = styled.nav<NavbarContainerProps>`
  display: flex;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.colors.black};

  height: 6rem;

  .img-container {
    display: flex;
    align-items: center;

    max-width: 40%;
  }

  .links-container {
    display: flex;
    align-items: flex-end;
    padding: 1.6rem;
  }

  .menu-toggle {
    display: none;
  }

  @media (max-width: 578px) {
    .menu-toggle {
      display: block;

      display: flex;
      align-items: center;

      padding: 1.6rem;

      font-size: 2rem;

      svg {
        cursor: pointer;

        transition: color 0.2s;

        &:hover,
        &:active {
          color: ${({ theme }) => theme.colors.primary};
        }
      }
    }

    .links-container {
      position: absolute;
      right: 0;
      bottom: 0;
      top: 6rem;

      background-color: ${({ theme }) => theme.colors.black};

      flex-direction: column;
      align-items: flex-start;

      z-index: 10;

      padding: 0;

      transition: max-width 0.2s;

      max-width: ${({ showMenu }) => (showMenu ? '50rem' : 0)};
    }
  }
`;

export const Logo = styled.img`
  height: 100%;
`;

export const TextLogo = styled.div`
  padding: 0 0.4rem;

  color: ${({ theme }) => theme.colors.textWhite};

  font: 700 3.2rem ${({ theme }) => theme.fonts.special};

  @media (max-width: 578px) {
    display: none;
  }
`;

export const Navlink = styled(Link)`
  font: 700 1.6rem ${({ theme }) => theme.fonts.special};
  text-transform: uppercase;

  margin: 0 0.8rem;

  @media (max-width: 578px) {
    font-size: 2.4rem;
    margin: 0.8rem;
  }
`;
