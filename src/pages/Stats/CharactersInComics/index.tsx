import React, { useMemo } from 'react';

// Libs
import { HorizontalBar } from 'react-chartjs-2';

// Styles
import { Container } from './styles';
import { withTheme } from 'styled-components';

// Types
import { CharactersInComicsProps } from './types';

// Utils
import { sortCharactersByComicLength } from '../utils';

const CharactersInComics: React.FC<CharactersInComicsProps> = ({
  data,
  theme,
}) => {
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
        label: 'Characters',
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
      <HorizontalBar
        options={{
          legend: {
            labels: {
              fontColor: theme.colors.textLightWhite,
            },
          },
          title: {
            fontColor: theme.colors.textWhite,
            text: 'Characters with most comic books',
            display: true,
            fontFamily: theme.fonts.special,
            fontSize: 20,
          },
          scales: {
            xAxes: [
              {
                ticks: {
                  fontColor: theme.colors.textWhite,
                },
                gridLines: {
                  color: theme.colors.textLightWhite,
                },
              },
            ],
            yAxes: [
              {
                ticks: {
                  fontColor: theme.colors.textWhite,
                },
                gridLines: {
                  color: theme.colors.textLightWhite,
                },
              },
            ],
          },
        }}
        data={{
          labels,
          datasets,
        }}
      />
    </Container>
  );
};

export default withTheme(CharactersInComics);
