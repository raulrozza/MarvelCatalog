import styled from 'styled-components';

export const Container = styled.div`
  cursor: pointer;

  width: 16rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1.6rem;

  border-radius: 0.4rem;

  transition: width 0.2s;

  img {
    width: 10.8rem;
    height: 10.8rem;

    border-radius: 50%;

    transition: all 0.2s;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.backgroundSmooth};

    width: 20rem;

    img {
      width: calc(10.8rem * 1.2);
      height: calc(10.8rem * 1.2);
    }

    footer {
      max-height: 10rem;
    }
  }
`;

export const Footer = styled.footer`
  font: 700 2rem ${({ theme }) => theme.fonts.special};

  overflow: hidden;
  max-height: 0;

  transition: max-height 0.2s;

  text-align: center;
`;
