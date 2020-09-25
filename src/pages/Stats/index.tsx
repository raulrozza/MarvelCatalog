import React from 'react';

// Components
import CharactersInComics from './CharactersInComics';
import ComicsWithMostCharacters from './ComicsWithMostCharacters';

// Hooks
import useFetchAndStore from '../../services/useFetchAndStore';

// Styles
import NoDataContainer from '../../styles/NoDataContainer';
import { Container, LoadingData } from './styles';

// Types
import { IComic } from '../../interfaces/api/Comics';
import { ICharacter } from '../../interfaces/api/Characters';

// Utils
import { extractCharactersData, extractComicsData } from './utils';

const Stats: React.FC = () => {
  const { loading: loadingCharacters, data: characters } = useFetchAndStore<
    ICharacter
  >('characters');
  const { loading: loadingComics, data: comics } = useFetchAndStore<IComic>(
    'comics',
  );

  if (loadingCharacters || loadingComics)
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
      <CharactersInComics data={extractCharactersData(characters || [])} />
      <ComicsWithMostCharacters data={extractComicsData(comics || [])} />
    </Container>
  );
};

export default Stats;
