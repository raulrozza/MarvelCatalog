import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Section = styled.section`
  margin: 0.8rem 0;
  padding: 1.6rem;

  border-radius: 0.8rem;

  width: 100%;
  max-width: 56rem;

  background-color: ${({ theme }) => theme.colors.backgroundHighlighted};
`;

export const Bio = styled(Section)`
  display: grid;
  grid-template-columns: 20rem 1fr;
  grid-template-rows: 1fr 2fr;
  grid-template-areas:
    'picture name'
    'picture description';
  gap: 1.6rem;

  picture {
    grid-area: picture;

    img {
      border-radius: 50%;
    }
  }

  h1 {
    grid-area: name;
    font-family: ${({ theme }) => theme.fonts.special};

    justify-self: center;

    text-align: center;
  }

  span {
    grid-area: description;

    justify-self: center;
    text-align: center;
  }
`;
