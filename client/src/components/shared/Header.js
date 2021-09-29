import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand className="col-4 mb-4 mt-4"  href="#home">EQUIPO CICLO 3</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Login</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;