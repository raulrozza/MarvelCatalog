import React, { useMemo } from 'react';

// Libs
import { Bar } from 'react-chartjs-2';

// Styles
import { Container } from './styles';
import { withTheme } from 'styled-components';

// Types
import { ComicsWithMostCharactersProps } from './types';

const ComicsWithMostCharacters: React.FC<ComicsWithMostCharactersProps> = ({
  data,
  theme,
}) => {
  const formattedData = useMemo(() => {
    const MAX_ELEMENTS = 6;
    const limitedData = data.slice(0, MAX_ELEMENTS);

    return limitedData;
  }, [data]);

  const labels = useMemo(() => formattedData.map(element => element.title), [
    formattedData,
  ]);

  const datasets = useMemo(() => {
    const displayData = formattedData.map(element => element.characters);

    return [
      {
        label: 'Character Count',
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
      <Bar
        options={{
          legend: {
            labels: {
              fontColor: theme.colors.textLightWhite,
            },
          },
          title: {
            fontColor: theme.colors.textWhite,
            text: 'Comics with the most characters',
            display: true,
            fontFamily: theme.fonts.special,
            fontSize: 20,
          },
          scales: {
            xAxes: [
              {
                ticks: {
                  display: false,
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
