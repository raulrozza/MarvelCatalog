import React, { useMemo } from 'react';

// Assets
import comicPlaceholder from '../../../assets/img/placeholders/comic.jpg';

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

  return (
    <Container>
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
