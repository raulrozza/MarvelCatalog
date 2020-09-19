import React from 'react';

// Contexts
import Theme from './contexts/Theme';

// Pages
import Main from './pages/Main';

const App: React.FC = () => {
  return (
    <Theme>
      <Main />
    </Theme>
  );
};

export default App;
