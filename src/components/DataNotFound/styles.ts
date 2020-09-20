import styled from 'styled-components';

export const Container = styled.div`
  height: calc(100% - 8rem);
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  span {
    background-color: ${({ theme }) => theme.colors.backgroundHighlighted};

    border-radius: 0.8rem;

    padding: 1.6rem;

    font-size: 2.4rem;

    text-align: center;
  }
`;
