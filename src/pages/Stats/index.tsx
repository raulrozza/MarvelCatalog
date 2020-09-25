import React from 'react';

// Components
import CharactersInComics from './CharactersInComics';

// Hooks
import useFetchAndStore from '../../services/useFetchAndStore';

// Styles
import NoDataContainer from '../../styles/NoDataContainer';
import { Container, LoadingData } from './styles';

// Types
import { ICharacter } from '../../interfaces/api/Characters';

// Utils
import { extractCharactersData } from './utils';

const Stats: React.FC = () => {
  const { loading, data } = useFetchAndStore<ICharacter>('characters');

  if (loading)
    return (
      <NoDataContainer>
        <h1>Organizing the data...</h1>
        <span>
          First time here? This may take a while. Go grab a cup of coffe while
          we set the page for you.
        </span>
        <LoadingData />
      </NoDataContainer>
    );

  return (
    <Container>
      <CharactersInComics data={extractCharactersData(data || [])} />
    </Container>
  );
};

export default Stats;
