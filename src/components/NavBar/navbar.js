import logo from "./bclogonew.png";
import {Link} from 'react-router-dom'
import { Container, Navbar,Nav,NavDropdown } from "react-bootstrap";
const NavBar = () => {
    return (       
    <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
    <Navbar.Brand href="#home">
    <img
          alt=""
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      BC Accountants</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link><Link to='/'>Home</Link></Nav.Link>
        <NavDropdown title="Online Returns" id="basic-nav-dropdown">
          <NavDropdown.ItemText ><b>Business</b></NavDropdown.ItemText>
          <NavDropdown.Item href="#action/3.2">Something</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.ItemText><b>Individuals</b></NavDropdown.ItemText>
          <NavDropdown.Item><Link to='/individuals'>Individuals</Link></NavDropdown.Item>
        </NavDropdown>
        <Nav.Link><Link to='/'>Other Services</Link></Nav.Link>
        <Nav.Link><Link to='/'>About Us</Link></Nav.Link>
        <Nav.Link><Link to='/'>Pricing</Link></Nav.Link>
        <Nav.Link><Link to='/'>Resources</Link></Nav.Link>
        <Nav.Link><Link to='/'>Guides</Link></Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
      );
}
 
export default NavBar;