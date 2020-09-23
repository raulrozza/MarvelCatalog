import React, { Suspense } from 'react';

// Components
import Loading from './components/Loading';
import { RecoilRoot } from 'recoil';
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
      <RecoilRoot>
        <BrowserRouter>
          <Suspense fallback={<Loading />}>
            <Routes />
          </Suspense>
        </BrowserRouter>
      </RecoilRoot>

      <ToastContainer pauseOnHover={false} />
    </Theme>
  );
};

export default App;
