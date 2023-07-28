import './App.css';
import './index.css'
// import {BrowserRouterRoute, Routes} from "react-router-dom";
import {Routes, Route } from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import Layout from './Layout';
import RegisterPage from './pages/RegisterPage';
axios.defaults.baseURL = 'http://localhost:3000'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
    </Routes>

  );
}

export default App;
