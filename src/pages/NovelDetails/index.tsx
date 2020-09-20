import React from 'react';

// Components
import Loading from '../../components/Loading';
import PageTitle from '../../components/PageTitle';

// Hooks
import { useFetcher } from '../../services/fetcher';
import { useParams } from 'react-router-dom';

// Styles
import { Container } from './styles';

// Types
import { IComic } from '../../interfaces/api/Comics';
import { IDParams } from '../../interfaces/routes/params';
import DataNotFound from '../../components/DataNotFound';

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
      <h1>sua comic aqui</h1>
      {JSON.stringify(comic)}
    </Container>
  );
};

export default NovelDetails;
