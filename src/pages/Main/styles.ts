import styled from 'styled-components';

export const Container = styled.main`
  padding: 0 8rem;

  .catalog-container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 0.8rem;
  }
`;
