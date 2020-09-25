import React from 'react';

// Libs
import ReactLoading from 'react-loading';

// Styles
import { Container } from './styles';

// Types
import { LoadingProps } from './types';

const Loading: React.FC<LoadingProps> = ({ style, className }) => {
  return (
    <Container style={style} className={className}>
      <ReactLoading type="cylon" />
    </Container>
  );
};

export default Loading;
