import styled from 'styled-components';

export const Container = styled.main`
  padding: 0 8rem;

  .catalog-container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 0.8rem;

    @media (max-width: ${({ theme }) => theme.breakpoints.xlg}) {
      grid-template-columns: repeat(4, 1fr);
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 0 2rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 0.8rem;
  }
`;
