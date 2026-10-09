import { Route, Routes } from 'react-router-dom';
import './App.css';
import './index.css';
import ScrollToTop from './utils/ScrollToTop';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
