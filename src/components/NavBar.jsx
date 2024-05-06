import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

import { CartWidget } from "./CartWidget";

export const NavBar = () => {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <Nav.Link to="/" className="navbar-brand" as={NavLink}>
          Tres Tartas
        </Nav.Link>
        <Nav className="me-auto">
          <Nav.Link to="/category/Tortas" as={NavLink}>
            Tortas
          </Nav.Link>
          <Nav.Link to="/category/Desayunos" as={NavLink}>
            Desayunos
          </Nav.Link>
          <Nav.Link to="/category/Recetas" as={NavLink}>
            Recetas{" "}
          </Nav.Link>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  );
};
