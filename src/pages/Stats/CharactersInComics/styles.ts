import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 1.6rem;

  background-color: ${({ theme }) => theme.colors.backgroundHighlighted};

  border-radius: 0.8rem;
`;
