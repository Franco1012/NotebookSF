import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import FilterButton from '../FilterButton/FilterButton';
import InputBuscar from '../InputBuscar/InputBuscar';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <Navbar expand="lg" className=" p-3 navbar">
      <Container>
        <Navbar.Brand as={Link} to='/'>NoteBookSF</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/Nosotros">Nosotros</Nav.Link>
            <Nav.Link as={Link} to="/Contacto">Contacto</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <FilterButton text={"Acer"} />
              <FilterButton text={"Bgh"} />
              <FilterButton text={"Lenovo"} />
            </NavDropdown>
            
          </Nav>
        </Navbar.Collapse>
        <InputBuscar/> 
        <CartWidget />
      </Container>
     
      
    </Navbar>
  );
}

export default NavBar;