import React from 'react';

// Components
import CharactersInComics from './CharactersInComics';
import Loading from '../../components/Loading';

// Hooks
import useFetchAndStore from '../../services/useFetchAndStore';

// Styles
import { Container } from './styles';

// Types
import { ICharacter } from '../../interfaces/api/Characters';

// Utils
import { extractCharactersData } from './utils';

const Stats: React.FC = () => {
  const { loading, data } = useFetchAndStore<ICharacter>('characters');

  if (loading) return <Loading />;

  return (
    <Container>
      <CharactersInComics data={extractCharactersData(data || [])} />
    </Container>
  );
};

export default Stats;
