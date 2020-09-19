import React, { useEffect } from 'react';
import api from './services/api';

const App: React.FC = () => {
  useEffect(() => {
    api
      .get('comics')
      .then(response => console.log(response.data))
      .catch(error => console.error(error, error.response.data));
  }, []);

  return <div className="App">opa</div>;
};

export default App;
