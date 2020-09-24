import React from 'react';

// Components
import Loading from '../../../components/Loading';
import ComicImage from '../../../components/ComicImage';

// Hooks
import { useFetcher } from '../../../services/useFetcher';

// Libs
import { Link } from 'react-router-dom';

// Styles
import { Container } from './styles';

// Types
import { ComicsListProps } from './types';
import { IComic } from '../../../interfaces/api/Comics';

const ComicsList: React.FC<ComicsListProps> = ({ sourceId }) => {
  const { loading, data } = useFetcher<IComic>(
    `/characters/${sourceId}/comics`,
  );

  return (
    <Container>
      <strong className="title">Comics:</strong>
      {loading ? (
        <Loading />
      ) : (
        <div className="list">
          {data.map(comic => (
            <div className="comic" key={comic.id}>
              <ComicImage
                thumbnail={comic.thumbnail}
                alt={comic.title}
                size="md"
              />
              <Link to={`/novels/${comic.id}`}>{comic.title}</Link>
            </div>
          ))}
        </div>
      )}
    </Container>
  );
};

export default ComicsList;
