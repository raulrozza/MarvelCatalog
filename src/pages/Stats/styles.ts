import styled from 'styled-components';
import Loading from '../../components/Loading';

export const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0.8rem;

  padding: 1.6rem;
`;

export const LoadingData = styled(Loading)`
  flex: 0;
`;
