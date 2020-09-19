import React from 'react';

// Libs
import ReactLoading from 'react-loading';

// Styles
import { Container } from './styles';

const Loading: React.FC = () => {
  return (
    <Container>
      <ReactLoading type="cylon" />
    </Container>
  );
};

export default Loading;
