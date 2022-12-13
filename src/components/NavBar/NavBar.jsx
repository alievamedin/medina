import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavbarCustom() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home"><img src="https://cdn-icons-png.flaticon.com/512/1717/1717612.png" style={{width: '5vw'}} alt="" />MEDI</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Link to="/" style={{color:"grey" , marginRight:"5px" , textDecoration:"none"}}>GENERAL</Link>
             <Link to="/languages" style={{color:"grey" , marginRight:"5px" , textDecoration:"none"}}>LANGUAGES</Link>
            <Link to="/skills" style={{color:"grey" , marginRight:"5px" , textDecoration:"none"}}>SKILLS</Link>
            <Link to="/courses" style={{color:"grey" , marginRight:"5px" , textDecoration:"none"}}>COURSES</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarCustom;