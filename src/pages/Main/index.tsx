import React, { useCallback, useEffect } from 'react';

// Components
import ComicCard from './ComicCard';
import PageTitle from '../../components/PageTitle';

// Hooks
import { useFetcher } from '../../services/useFetcher';

// Libs
import Loading from '../../components/Loading';
import InfiniteScroll from 'react-infinite-scroll-component';

// Recoil
import { useRecoilValue } from 'recoil';
import filter from '../../atoms/filter';

// Styles
import { Container } from './styles';

// Types
import { IComic } from '../../interfaces/api/Comics';

const Main: React.FC = () => {
  const filterValue = useRecoilValue(filter);
  const { loading, data, canFetch, fetchNext, refresh } = useFetcher<IComic>(
    'comics',
  );

  const handleFetchNext = useCallback(() => {
    const fetchFilter = filterValue ? { titleStartsWith: filterValue } : null;

    fetchNext(fetchFilter);
  }, [fetchNext, filterValue]);

  useEffect(() => {
    if (loading) return;

    const fetchFilter = filterValue ? { titleStartsWith: filterValue } : null;

    refresh(fetchFilter);
  }, [filterValue, refresh]);

  return (
    <Container>
      <PageTitle title="Novels" />

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
          <div className="catalog-container">
            {data.map(comic => (
              <ComicCard key={comic.id} comic={comic} />
            ))}
          </div>
        </InfiniteScroll>
      )}
    </Container>
  );
};

export default Main;
