import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../images/logo.png';
import Home from '../Home/home';
import { Outlet } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import './navbar.css'
//https://faiizii992.medium.com/creating-a-navbar-using-react-router-dom-and-react-bootstrap-react-router-bootstrap-e6b59015a5ec
const TopNav = () => (
  <Navbar collapseOnSelect expand="lg" className="bg-primary navContent TopNav">
    <LinkContainer to="/">
      <Navbar.Brand>
        <img src={logo} width="150" alt="logo" className="ms-5" exact path="/" component={Home} to="/" />
      </Navbar.Brand>
    </LinkContainer>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" className="mx-5" />
    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end me-5">
      <Nav>
        <LinkContainer to="/About">
          <Nav.Link className="text-third ">About</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/Contact">
          <Nav.Link className="text-third mx-5 ">Contact</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/Projects">
          <Nav.Link className="text-third ">Projects</Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
    <Outlet />
  </Navbar>
);

export default TopNav;
