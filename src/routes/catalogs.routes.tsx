import React, { lazy } from 'react';

// Components
import Navbar from '../components/Navbar';

// Libs
import { Redirect, Route, Switch } from 'react-router-dom';

// Pages
const Main = lazy(() => import('../pages/Main'));
const CharacterBio = lazy(() => import('../pages/CharacterBio'));
const Characters = lazy(() => import('../pages/Characters'));
const NovelDetails = lazy(() => import('../pages/NovelDetails'));

const CatalogRoutes: React.FC = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/novels/:id" exact component={NovelDetails} />
        <Route path="/novels" exact component={Main} />
        <Route path="/characters/:id" exact component={CharacterBio} />
        <Route path="/characters" exact component={Characters} />
        <Route path="*" exact>
          <Redirect to="/novels" />
        </Route>
      </Switch>
    </>
  );
};

export default CatalogRoutes;
