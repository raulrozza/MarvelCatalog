import React from 'react';

// Components
import CharacterImage from '../../../components/CharacterImage';
import Loading from '../../../components/Loading';

// Hooks
import { useFetcher } from '../../../services/fetcher';

// Styles
import { CharacterBox, Container } from './styles';

// Types
import { CharactersListProps } from './types';
import { ICharacter } from '../../../interfaces/api/Characters';

const CharactersList: React.FC<CharactersListProps> = ({ sourceId }) => {
  const { loading, data } = useFetcher<ICharacter>(
    `/comics/${sourceId}/characters`,
  );

  if (loading) return <Loading />;

  return (
    <Container>
      <strong>Characters:</strong>
      {data.length === 0 &&
        'There are no characters associated with this comic.'}
      <div className="list">
        {data.map(character => (
          <CharacterBox key={character.id} to={`/characters/${character.id}`}>
            <CharacterImage
              thumbnail={character.thumbnail}
              alt={character.name}
              size="md"
            />
            <div className="name">{character.name}</div>
          </CharacterBox>
        ))}
      </div>
    </Container>
  );
};

export default CharactersList;
