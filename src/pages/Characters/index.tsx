import React from 'react';

// Components
import PageTitle from '../../components/PageTitle';
import Loading from '../../components/Loading';
import CharacterPortrait from './CharacterPortrait';
import InfiniteScroll from 'react-infinite-scroll-component';

// Hooks
import { useFetcher } from '../../services/fetcher';

// Styles
import { Container } from './styles';

// Types
import { ICharacter } from '../../interfaces/api/Characters';

const Characters: React.FC = () => {
  const { loading, data, canFetch, fetchNext } = useFetcher<ICharacter>(
    'characters',
    { limit: 30 },
  );

  return (
    <Container>
      <PageTitle title="Characters" />

      {loading ? (
        <Loading />
      ) : (
        <InfiniteScroll
          hasMore={canFetch}
          loader={<Loading />}
          next={fetchNext}
          dataLength={data.length}
          style={{ overflow: 'none' }}
        >
          <div className="character-list">
            {data.map(character => (
              <CharacterPortrait key={character.id} character={character} />
            ))}
          </div>
        </InfiniteScroll>
      )}
    </Container>
  );
};

export default Characters;
