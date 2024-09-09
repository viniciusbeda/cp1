import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NovaLista from './pages/NovaLista';
import Perfil from './pages/Perfil';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nova-lista" element={<NovaLista />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </>
  );
};

export default App;
