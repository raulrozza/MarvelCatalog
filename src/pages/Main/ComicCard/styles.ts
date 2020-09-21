import styled from 'styled-components';
import ComicImage from '../../../components/ComicImage';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundSmooth};
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.4);

  border-radius: 0.4rem;

  padding: 1.6rem;
  position: relative;

  overflow: hidden;

  display: grid;
  grid-template-areas: 'title' 'thumb';
  grid-template-rows: 8rem 25rem;
  place-items: center;

  cursor: pointer;

  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.backgroundHighlighted};

    img {
      transform: scale(1.1);
    }

    footer {
      bottom: 0;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-rows: 6rem 18rem;

    img {
      height: 18rem;
    }
  }
`;

export const Title = styled.strong`
  grid-area: title;

  font: 700 1.8rem ${({ theme }) => theme.fonts.special};

  text-align: center;

  text-overflow: ellipsis;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1.2rem;
  }
`;

export const Thumb = styled(ComicImage)`
  grid-area: thumb;

  img {
    transition: transform 0.2s;
  }
`;

export const Footer = styled.footer`
  position: absolute;
  bottom: -10rem;
  left: 0;
  right: 0;

  padding: 1.6rem;

  font: 300 1.4rem ${({ theme }) => theme.fonts.special};
  text-align: right;

  background-color: #0009;

  transition: bottom 0.2s;
`;
