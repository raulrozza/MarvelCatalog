import React, { useMemo } from 'react';

// Assets
import comicPlaceholder from '../../../assets/img/placeholders/comic.jpg';

// Hooks
import { useHistory } from 'react-router-dom';

// Styles
import { Container, Footer, Thumb, Title } from './styles';

// Types
import { ComicCardProps } from '../types';
import getImageURL from '../../../utils/getImageURL';

const ComicCard: React.FC<ComicCardProps> = ({ comic }) => {
  const thumbnailURL = useMemo(() => {
    const { thumbnail } = comic;

    return getImageURL(thumbnail.path, thumbnail.extension, 'lg');
  }, [comic]);
  const { push } = useHistory();

  const handleNavigate = () => {
    push(`/novels/${comic.id}`);
  };

  return (
    <Container onClick={handleNavigate}>
      <Title>{comic.title}</Title>
      <Thumb>
        <source srcSet={thumbnailURL} />
        <img src={comicPlaceholder} alt={comic.title} />
      </Thumb>
      <Footer>Ver detalhes</Footer>
    </Container>
  );
};

export default ComicCard;
