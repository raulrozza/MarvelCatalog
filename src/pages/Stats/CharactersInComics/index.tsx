import React, { useMemo } from 'react';

// Libs
import { HorizontalBar } from 'react-chartjs-2';

// Styles
import { Container } from './styles';
import { withTheme } from 'styled-components';

// Types
import { CharactersInComicsProps } from './types';

const CharactersInComics: React.FC<CharactersInComicsProps> = ({
  data,
  theme,
}) => {
  const formattedData = useMemo(() => {
    const MAX_ELEMENTS = 10;
    const limitedData = data.slice(0, MAX_ELEMENTS);

    return limitedData;
  }, [data]);

  const labels = useMemo(() => formattedData.map(element => element.name), [
    formattedData,
  ]);

  const datasets = useMemo(() => {
    const displayData = formattedData.map(element => element.comics);

    return [
      {
        label: 'Comic books',
        backgroundColor: theme.colors.primaryUltraTransparent,
        borderColor: theme.colors.primaryTransparent,
        borderWidth: 1,
        hoverBackgroundColor: theme.colors.primaryExtraTransparent,
        hoverBorderColor: theme.colors.primaryTransparent,

        data: displayData,
      },
    ];
  }, [formattedData, theme]);

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
            text: 'Characters with most comic books presence',
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
