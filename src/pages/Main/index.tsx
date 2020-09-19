import React from 'react';

// Libs
import { Helmet } from 'react-helmet';
import Loading from '../../components/Loading';
import { useFetcher } from '../../services/fetcher';

// Styles
import { Container } from './styles';

// Types
import { IComic } from '../../interfaces/api/Comics';
import ComicCard from './ComicCard';

const Main: React.FC = () => {
  const { loading, data } = useFetcher<IComic[]>('comics');

  return (
    <Container>
      <Helmet>
        <title>Quadrinhos - Marvel Catalog</title>
      </Helmet>

      {loading ? (
        <Loading />
      ) : (
        <div className="catalog-container">
          {data?.map(comic => (
            <ComicCard key={comic.id} comic={comic} />
          ))}
        </div>
      )}
    </Container>
  );
};

export default Main;
