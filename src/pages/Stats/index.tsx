import React from 'react';

// Components
import Loading from '../../components/Loading';

// Hooks
import useFetchAndStore from '../../services/useFetchAndStore';

// Styles
import { Container } from './styles';

// Types
import { ICharacter } from '../../interfaces/api/Characters';

const Stats: React.FC = () => {
  const { loading, data } = useFetchAndStore<ICharacter>('characters');

  if (loading) return <Loading />;

  return <Container></Container>;
};

export default Stats;
