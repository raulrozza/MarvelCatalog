import React from 'react';

// Libs
import { Helmet } from 'react-helmet';

// Types
import { PageTitleProps } from './types';

const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  return (
    <Helmet>
      <title>{title} - Marvel Catalog</title>
    </Helmet>
  );
};

export default PageTitle;
