import React from 'react';

// Libs
import { Helmet } from 'react-helmet';
import Loading from '../../components/Loading';
import { useFetcher } from '../../services/fetcher';

// import { Container } from './styles';

const Main: React.FC = () => {
  const { loading, data } = useFetcher<{ id: number }[]>('comics');
  return (
    <div>
      <Helmet>
        <title>Quadrinhos - Marvel Catalog</title>
      </Helmet>
      {loading ? (
        <Loading />
      ) : (
        <ul>
          {data?.map((value, index) => (
            <li key={index}>
              {JSON.stringify(value, null, 2)}
              <br />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Main;
