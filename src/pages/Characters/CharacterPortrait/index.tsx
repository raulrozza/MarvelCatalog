import React from 'react';
import CharacterImage from '../../../components/CharacterImage';

// Styles
import { Container, Footer } from './styles';

// Types
import { CharacterPortraitProps } from './types';

const CharacterPortrait: React.FC<CharacterPortraitProps> = ({ character }) => {
  return (
    <Container>
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
