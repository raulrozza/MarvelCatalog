import React from 'react';

// Components
import CharacterImage from '../../components/CharacterImage';
import ComicsList from './ComicsList';
import DataNotFound from '../../components/DataNotFound';
import Loading from '../../components/Loading';
import PageTitle from '../../components/PageTitle';

// Hooks
import { useFetcher } from '../../services/fetcher';
import { useParams } from 'react-router-dom';

// Styles
import { Bio, Container } from './styles';

// Types
import { IDParams } from '../../interfaces/routes/params';
import { ICharacter } from '../../interfaces/api/Characters';

const CharacterBio: React.FC = () => {
  const { id } = useParams<IDParams>();
  const {
    loading,
    data: [character],
  } = useFetcher<ICharacter>(`characters/${id}`);

  if (loading) return <Loading />;

  if (!character) return <DataNotFound itemName="character" />;

  return (
    <Container>
      <PageTitle title={character.name} />
      <Bio>
        <CharacterImage
          thumbnail={character.thumbnail}
          alt={character.name}
          size="lg"
        />

        <h1>{character.name}</h1>

        <span>{character.description}</span>
      </Bio>

      <ComicsList sourceId={id} />
    </Container>
  );
};

export default CharacterBio;
