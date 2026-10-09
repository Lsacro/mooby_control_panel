import { Route, Routes } from 'react-router-dom';
import './App.css';
import './index.css';
import ScrollToTop from './utils/ScrollToTop';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
