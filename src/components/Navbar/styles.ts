import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.nav`
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
`;

export const Logo = styled.img`
  height: 100%;
`;

export const TextLogo = styled.div`
  padding: 0 0.4rem;

  color: ${({ theme }) => theme.colors.textWhite};

  font: 700 3.2rem 'Roboto Condensed', sans-serif;
`;

export const Navlink = styled(Link)`
  font: 700 1.6rem 'Roboto Condensed', sans-serif;
  text-transform: uppercase;
`;
