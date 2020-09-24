import React, { useMemo } from 'react';

// Libs
import { HorizontalBar } from 'react-chartjs-2';

// Styles
import { Container } from './styles';

// Types
import { CharactersInComicsProps } from './types';

// Utils
import { sortCharactersByComicLength } from '../utils';

const CharactersInComics: React.FC<CharactersInComicsProps> = ({ data }) => {
  const formattedData = useMemo(() => {
    const orderedData = sortCharactersByComicLength(data);
    const limitedData = orderedData.slice(0, 10);

    return limitedData;
  }, [data]);

  const labels = useMemo(() => formattedData.map(element => element.name), [
    formattedData,
  ]);

  const datasets = useMemo(() => {
    const displayData = formattedData.map(element => element.comics);

    return [
      {
        label: 'Dataset',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: displayData,
      },
    ];
  }, [formattedData]);

  return (
    <Container>
      <h2>Characters with most comic books</h2>
      <HorizontalBar
        data={{
          labels,
          datasets,
        }}
      />
    </Container>
  );
};

export default CharactersInComics;
