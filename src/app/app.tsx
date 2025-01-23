// Uncomment this line to use CSS modules
// import styles from './app.module.scss';
import { Route, Routes } from 'react-router';
import LoginPage from 'src/LoginPage/LoginPage';
import ProtectPage from 'src/ProtectPage/ProtectPage';
import RedirectPage from 'src/RedirectPage/RedirectPage';
import WelcomePage from 'src/WelcomePage/WelcomePage';
import './app.scss';

export function App() {
  return (
    <div className='centered-div'>
      <h1>Welcome to my app.</h1>
      <Routes>
        <Route path='/' element={<WelcomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/private' element={<ProtectPage />} />
        <Route path='/oauth2/idpresponse' element={<RedirectPage />} />
      </Routes>
    </div>
  );
}

export default App;
