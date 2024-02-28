
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contacto from './components/Contacto/Contacto';
import Nosotros from './components/Nosotros/Nosotros';
import ItemDetail from './components/ItemDetail/ItemDetail';
import CategoriaMarca from './components/CategoriaMarca/CategoriaMarca';
import { ProductProvider } from './ProductContext';
import CartItems from './components/CartItems/CartItems';
import { CartProvider } from './CartContext';
import Checkout from './components/Checkout/Checkout';
import Footer from './components/Footer/Footer';


function App() {

  return (
    <div>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <ProductProvider>
            <Routes>
              <Route path="/" element={<ItemListContainer texto='Bienvenidos' />} />
              <Route path="/Contacto" element={<Contacto />} />
              <Route path="/Nosotros" element={<Nosotros />} />
              <Route path="/CartItems" element={<CartItems />} />
              <Route path="/:id" element={<ItemDetail />} />
              <Route path="/productos/:marca" element={<CategoriaMarca />} />
              <Route path="/productos/:marca/:id" element={<ItemDetail />} />
              <Route path='/checkout' element={<Checkout />} />
            </Routes>
          </ProductProvider>
        </CartProvider>
        <Footer/>
      </BrowserRouter>
      
      
    </div>
  );


}



export default App;
