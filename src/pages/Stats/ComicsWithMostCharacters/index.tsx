import React, { useMemo } from 'react';

// Libs
import { Bar } from 'react-chartjs-2';

// Styles
import { Container } from './styles';
import { withTheme } from 'styled-components';

// Types
import { ComicsWithMostCharactersProps } from './types';

// Utils
import { sortComicsByCharacterCount } from '../utils';

const ComicsWithMostCharacters: React.FC<ComicsWithMostCharactersProps> = ({
  data,
  theme,
}) => {
  const formattedData = useMemo(() => {
    const orderedData = sortComicsByCharacterCount(data);
    const limitedData = orderedData.slice(0, 6);

    return limitedData;
  }, [data]);

  const labels = useMemo(() => formattedData.map(element => element.title), [
    formattedData,
  ]);

  const datasets = useMemo(() => {
    const displayData = formattedData.map(element => element.characters);

    return [
      {
        label: 'Comics',
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
      <Bar
        options={{
          legend: {
            labels: {
              fontColor: theme.colors.textLightWhite,
            },
          },
          title: {
            fontColor: theme.colors.textWhite,
            text: 'Comics with most characters',
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

export default withTheme(ComicsWithMostCharacters);
