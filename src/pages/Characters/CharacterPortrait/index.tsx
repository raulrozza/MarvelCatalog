import React from 'react';
import { useHistory } from 'react-router-dom';

// Components
import CharacterImage from '../../../components/CharacterImage';

// Styles
import { Container, Footer } from './styles';

// Types
import { CharacterPortraitProps } from './types';

const CharacterPortrait: React.FC<CharacterPortraitProps> = ({ character }) => {
  const { push } = useHistory();

  const handleNavigateToCharacter = () => push(`/characters/${character.id}`);

  return (
    <Container onClick={handleNavigateToCharacter}>
      <CharacterImage
        thumbnail={character.thumbnail}
        alt={character.name}
        size="lg"
      />

      <Footer>
        <span>{character.name}</span>
      </Footer>
    </Container>
  );
};

export default CharacterPortrait;
