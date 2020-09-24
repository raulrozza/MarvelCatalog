import React, { useEffect } from 'react';

// Components
import Loading from '../../components/Loading';

// Hooks
import { useFetchAll } from '../../services/useFetcherAll';

// Styles
import { Container } from './styles';

// Utils
import { loadData, saveData } from '../../utils/handleStorage';

const Stats: React.FC = () => {
  const { loading, data } = useFetchAll('characters');

  useEffect(() => {
    // saveJson('characters', { data: 'oi' });
    loadData('characters').then(console.log).catch(console.error);
  }, []);

  if (loading) return <Loading />;

  return <Container></Container>;
};

export default Stats;
