
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contacto from './components/Contacto/Contacto';
import Nosotros from './components/Nosotros/Nosotros';
import ItemDetail from './components/ItemDetail/ItemDetail';
import CategoriaMarca from './components/CategoriaMarca/CategoriaMarca';
import { ProductProvider} from './ProductContext';






function App() {



  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <ProductProvider>
        <Routes>
         <Route path="/" element={<ItemListContainer texto='Bienvenidos' />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/Nosotros" element={<Nosotros />} />
          <Route path="/:id" element={<ItemDetail />} />
          <Route path="/productos/:marca" element={<CategoriaMarca />} />
          <Route path="/productos/:marca/:id" element={<ItemDetail />} />
        </Routes>
          </ProductProvider>
      </BrowserRouter>

    </div>
  );


}



export default App;
