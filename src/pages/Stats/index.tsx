import React from 'react';

// Components
import Loading from '../../components/Loading';

// Hooks
import { useFetchAll } from '../../services/useFetcherAll';

// Styles
import { Container } from './styles';

const Stats: React.FC = () => {
  const { loading, data } = useFetchAll('characters');

  if (loading) return <Loading />;

  return <Container>{data.map(item => `${JSON.stringify(item)}\n`)}</Container>;
};

export default Stats;
