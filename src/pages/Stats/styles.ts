import styled from 'styled-components';
import Loading from '../../components/Loading';

export const Container = styled.main`
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(2, calc(50vw - 1.6rem));
  gap: 0.8rem;

  padding: 1.6rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: flex;

    flex-direction: column;
  }
`;

export const LoadingData = styled(Loading)`
  flex: 0;
`;
