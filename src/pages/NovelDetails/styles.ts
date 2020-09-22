import styled from 'styled-components';
import ComicImage from '../../components/ComicImage';

export const Container = styled.main`
  margin: 1.6rem;
  padding: 1.6rem;

  background-color: ${({ theme }) => theme.colors.backgroundHighlighted};

  border-radius: 0.8rem;

  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 10.8rem 48rem 1fr;
  grid-template-areas:
    'title info'
    'picture info'
    'creators info';
  place-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-areas:
      'picture title creators'
      'info info info';

    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 24rem 1fr;

    > picture img {
      height: 20rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin: 0.8rem;
    padding: 0.8rem;

    grid-template-areas:
      'title'
      'picture'
      'info'
      'creators';

    grid-template-columns: 1fr;
    grid-template-rows: 4rem 24rem 1fr 1fr;
  }
`;

export const Title = styled.h1`
  grid-area: title;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 2rem;
  }
`;

export const Thumb = styled(ComicImage)`
  grid-area: picture;

  * {
    border-radius: 4px;
  }
`;

export const CreatorsList = styled.section`
  grid-area: creators;
  align-self: flex-start;

  display: flex;
  flex-direction: column;

  width: 100%;
  margin-top: 1.6rem;
  padding: 0.8rem;

  border-radius: 0.8rem;

  background-color: ${({ theme }) => theme.colors.backgroundSmooth};

  .title {
    color: ${({ theme }) => theme.colors.textWhite};
    font: 700 1.8rem ${({ theme }) => theme.fonts.special};

    border-bottom: 1px solid ${({ theme }) => theme.colors.textLightWhite};
  }

  .creator {
    padding: 0.4rem;

    color: ${({ theme }) => theme.colors.textLightWhite};

    font-size: 1.4rem;

    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    cite {
      text-transform: capitalize;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    align-self: center;
  }
`;

export const Info = styled.section`
  grid-area: info;

  align-self: flex-start;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1.6rem;

  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0.4rem 0;

    overflow: hidden;
  }
`;

export const DescriptionBlock = styled.section`
  text-align: center;

  display: flex;
  flex-direction: column;

  margin-bottom: 1.6rem;
`;

export const ItemGroup = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 64rem;
  padding: 0.8rem;

  border-radius: 0.8rem;

  margin-bottom: 3.2rem;

  background-color: ${({ theme }) => theme.colors.backgroundSmooth};

  strong {
    color: ${({ theme }) => theme.colors.textWhite};
    font: 700 1.8rem ${({ theme }) => theme.fonts.special};
  }
`;

export const ListItem = styled.div`
  background-color: ${({ theme }) => theme.colors.background};

  padding: 0.8rem;
  margin: 0.4rem;

  border-radius: 0.4rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1.4rem;

    padding: 0.4rem;
  }
`;
