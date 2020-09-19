import React from 'react';

// Hooks
import { useFetcher } from '../../services/fetcher';

// Libs
import { Helmet } from 'react-helmet';
import Loading from '../../components/Loading';
import InfiniteScroll from 'react-infinite-scroll-component';

// Styles
import { Container } from './styles';

// Types
import { IComic } from '../../interfaces/api/Comics';
import ComicCard from './ComicCard';

const Main: React.FC = () => {
  const { loading, data, canFetch, fetchNext } = useFetcher<IComic>('comics');

  return (
    <Container>
      <Helmet>
        <title>Quadrinhos - Marvel Catalog</title>
      </Helmet>

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
