import React from 'react';

// Icons
import { FaFrown } from 'react-icons/fa';

// Components
import PageTitle from '../PageTitle';

// Styles
import { Container } from './styles';

// Types
import { DataNotFoundProps } from './types';

const DataNotFound: React.FC<DataNotFoundProps> = ({ itemName }) => {
  return (
    <Container>
      <PageTitle title="Not Found" />
      <span>
        The ${itemName} you requested could not be found.
        <br />
        <FaFrown />
      </span>
    </Container>
  );
};

export default DataNotFound;
