import styled from 'styled-components';

export const Container = styled.main`
  padding: 0 8rem;

  .character-list {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 0.8rem;
    justify-items: center;

    padding: 1.6rem;
    margin-top: 1.6rem;

    border-radius: 0.8rem;

    background-color: ${({ theme }) => theme.colors.black};
  }
`;
