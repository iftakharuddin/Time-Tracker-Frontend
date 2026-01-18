import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function AppNavbar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">Time Tracker</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Daily</Nav.Link>
          <Nav.Link as={Link} to="/weekly">Weekly</Nav.Link>
          <Nav.Link as={Link} to="/monthly">Monthly</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
