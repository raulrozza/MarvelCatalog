import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundSmooth};
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.4);

  border-radius: 0.4rem;

  padding: 1.6rem;

  display: grid;
  grid-template-areas: 'title' 'thumb';
  grid-template-rows: 8rem 25rem;
  place-items: center;
`;

export const Title = styled.strong`
  grid-area: title;

  font: 700 1.8rem 'Roboto Condensed', sans-serif;

  text-align: center;

  text-overflow: ellipsis;
`;

export const Thumb = styled.picture`
  grid-area: thumb;
`;
