import React, { lazy } from 'react';

// Components
import Navbar from '../components/Navbar';

// Libs
import { Redirect, Route, Switch } from 'react-router-dom';

// Pages
const Main = lazy(() => import('../pages/Main'));

const CatalogRoutes: React.FC = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/novels" exact component={Main} />
        <Route path="*" exact>
          <Redirect to="/novels" />
        </Route>
      </Switch>
    </>
  );
};

export default CatalogRoutes;
