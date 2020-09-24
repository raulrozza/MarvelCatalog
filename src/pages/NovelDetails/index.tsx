import React from 'react';

// Components
import DataNotFound from '../../components/DataNotFound';
import Loading from '../../components/Loading';
import PageTitle from '../../components/PageTitle';

// Hooks
import { useFetcher } from '../../services/useFetcher';
import { useParams } from 'react-router-dom';

// Styles
import {
  Container,
  CreatorsList,
  DescriptionBlock,
  Info,
  ItemGroup,
  ListItem,
  Thumb,
  Title,
} from './styles';

// Types
import { IComic } from '../../interfaces/api/Comics';
import { IDParams } from '../../interfaces/routes/params';
import CharactersList from './CharactersList';

const NovelDetails: React.FC = () => {
  const { id } = useParams<IDParams>();
  const {
    loading,
    data: [comic],
  } = useFetcher<IComic>(`/comics/${id}`);

  if (loading) return <Loading />;

  if (!comic) return <DataNotFound itemName="comic" />;

  return (
    <Container>
      <PageTitle title={comic.title} />

      <Title>{comic.title}</Title>

      <Thumb thumbnail={comic.thumbnail} size="uncanny" alt={comic.title} />

      <CreatorsList>
        <strong className="title">Creators:</strong>

        {comic.creators.items.map(creator => (
          <div className="creator" key={creator.resourceURI}>
            <strong>{creator.name} </strong>

            <cite>[ {creator.role} ]</cite>
          </div>
        ))}
      </CreatorsList>

      <Info>
        {(comic.description || comic.variantDescription) && (
          <DescriptionBlock>
            <cite
              dangerouslySetInnerHTML={{ __html: comic.description || '' }}
            />
            <cite>{comic.variantDescription}</cite>
          </DescriptionBlock>
        )}

        {comic.series && (
          <ItemGroup>
            <strong>Series:</strong>

            <ListItem>{comic.series.name}</ListItem>
          </ItemGroup>
        )}

        {comic.collections.length > 0 && (
          <ItemGroup>
            <strong>Collections:</strong>

            {comic.collections.map(collection => (
              <ListItem key={collection.resourceURI}>
                {collection.name}
              </ListItem>
            ))}
          </ItemGroup>
        )}

        <CharactersList sourceId={id} />
      </Info>
    </Container>
  );
};

export default NovelDetails;
