import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import FilterInput from '../FilterInput/FilterInput';
import SearchInput from '../SearchInput/SearchInput';
import './NavBar.css';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary p-3 navbar">
      <Container>
        <Navbar.Brand href="#home">NoteBookSF</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Nosotros</Nav.Link>
            <Nav.Link href="#link">Contacto</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <FilterInput value={"Acer"} />
              <FilterInput value={"Bgh"} />
              <FilterInput value={"Lenovo"} />
            </NavDropdown>
          </Nav>
          <SearchInput />
        </Navbar.Collapse>
      </Container>
      <Nav.Link href="#link">Mi Cuenta</Nav.Link>
      <CartWidget />
    </Navbar>
  );
}

export default NavBar;