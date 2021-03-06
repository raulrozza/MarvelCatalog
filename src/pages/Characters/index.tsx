import React, { useCallback, useEffect } from 'react';

// Components
import PageTitle from '../../components/PageTitle';
import Loading from '../../components/Loading';
import CharacterPortrait from './CharacterPortrait';
import InfiniteScroll from 'react-infinite-scroll-component';

// Hooks
import { useFetcher } from '../../services/useFetcher';

// Recoil
import { useRecoilValue } from 'recoil';
import filter from '../../atoms/filter';

// Styles
import NoDataContainer from '../../styles/NoDataContainer';
import { Container } from './styles';

// Types
import { ICharacter } from '../../interfaces/api/Characters';

const Characters: React.FC = () => {
  const filterValue = useRecoilValue(filter);
  const { loading, data, canFetch, fetchNext, refresh } = useFetcher<
    ICharacter
  >('characters', { limit: 30 });

  const handleFetchNext = useCallback(() => {
    const fetchFilter = filterValue ? { nameStartsWith: filterValue } : null;

    fetchNext(fetchFilter);
  }, [fetchNext, filterValue]);

  useEffect(() => {
    if (loading) return;

    const fetchFilter = filterValue ? { nameStartsWith: filterValue } : null;

    refresh(fetchFilter);
  }, [filterValue, refresh]);

  return (
    <Container>
      <PageTitle title="Characters" />

      {loading ? (
        <Loading />
      ) : (
        <InfiniteScroll
          hasMore={canFetch}
          loader={<Loading />}
          next={handleFetchNext}
          dataLength={data.length}
          style={{ overflow: 'none' }}
        >
          {data.length > 0 && (
            <div className="character-list">
              {data.map(character => (
                <CharacterPortrait key={character.id} character={character} />
              ))}
            </div>
          )}

          {data.length === 0 && (
            <NoDataContainer>
              <h1>Unavailable</h1>
              <span>
                Could not display characters now. Please, try again later.
              </span>
            </NoDataContainer>
          )}
        </InfiniteScroll>
      )}
    </Container>
  );
};

export default Characters;
