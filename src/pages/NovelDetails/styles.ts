import styled from 'styled-components';
import ComicImage from '../../components/ComicImage';

export const Container = styled.main`
  margin: 1.6rem;
  padding: 1.6rem;

  background-color: ${({ theme }) => theme.colors.backgroundHighlighted};

  border-radius: 0.8rem;

  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 8rem 2fr 1fr;
  grid-template-areas:
    'title info'
    'picture info'
    'creators info';
  place-items: center;
`;

export const Title = styled.h1`
  grid-area: title;
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

    cite {
      text-transform: capitalize;
    }
  }
`;

export const Info = styled.section`
  grid-area: info;

  align-self: flex-start;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1.6rem;
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
`;
