import React, { Suspense } from 'react';

// Componetes
import Loading from './components/Loading';
import Routes from './routes/index.routes';

// Contexts
import Theme from './contexts/Theme';

// Libs
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

// CSS
import 'react-toastify/dist/ReactToastify.min.css';

const App: React.FC = () => {
  return (
    <Theme>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes />
        </Suspense>
      </BrowserRouter>

      <ToastContainer pauseOnHover={false} />
    </Theme>
  );
};

export default App;
