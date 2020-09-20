import React from 'react';

// Hooks
import { useHistory } from 'react-router-dom';

// Styles
import { Container, Footer, Thumb, Title } from './styles';

// Types
import { ComicCardProps } from '../types';

const ComicCard: React.FC<ComicCardProps> = ({ comic }) => {
  const { push } = useHistory();

  const handleNavigate = () => {
    push(`/novels/${comic.id}`);
  };

  return (
    <Container onClick={handleNavigate}>
      <Title>{comic.title}</Title>
      <Thumb thumbnail={comic.thumbnail} alt={comic.title} size="lg" />
      <Footer>Ver detalhes</Footer>
    </Container>
  );
};

export default ComicCard;
