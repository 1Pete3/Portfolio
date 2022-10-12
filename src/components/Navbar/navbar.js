import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../images/site1.png';
import { motion } from 'framer-motion';
import { Outlet, useLocation } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import './navbar.css';

//https://faiizii992.medium.com/creating-a-navbar-using-react-router-dom-and-react-bootstrap-react-router-bootstrap-e6b59015a5ec
const TopNav = () => {
  const location = useLocation();
  
  return(
  <Navbar collapseOnSelect expand="lg" className="bg-primary navContent TopNav ">
    <motion.div whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 200, damping: 10 }}>
      <LinkContainer to="/" className="justify-content-md-center">
        <Navbar.Brand className="ms-5 ">
          <img src={logo} width="150" alt="logo"  exact path="/" to="/" className="ms-4"/>
        </Navbar.Brand>
      </LinkContainer>
    </motion.div>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" className="mx-5" />
    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
      <Nav className='mx-5'>
        <motion.div whileHover={{ scale: 1.3}} transition={{ type: 'spring', stiffness: 400, damping: 10 }} className='mx-2 text-center'>
          <LinkContainer to="/About">
            <Nav.Link className={location.pathname === "/About" ? "text-fourth":"text-third"}>About</Nav.Link>
          </LinkContainer>
        </motion.div>
        <motion.div whileHover={{ scale: 1.3 }} transition={{ type: 'spring', stiffness: 400, damping: 10 }} className='mx-2 text-center'>
          <LinkContainer to="/Contact">
            <Nav.Link className={location.pathname === "/Contact" ? "text-fourth":"text-third "}>Contact</Nav.Link>
          </LinkContainer>
        </motion.div>
        <motion.div whileHover={{ scale: 1.3 }} transition={{ type: 'spring', stiffness: 400, damping: 10 }} className='mx-2 text-center'>
          <LinkContainer to="/Projects">
            <Nav.Link className={location.pathname === "/Projects" ? "text-fourth":"text-third"}>Projects</Nav.Link>
          </LinkContainer>
        </motion.div>
        <motion.div whileHover={{ scale: 1.3 }} transition={{ type: 'spring', stiffness: 400, damping: 10 }} className='mx-2 text-center'>
          <LinkContainer to="/Resume">
            <Nav.Link className={location.pathname === "/Resume" ? "text-fourth":"text-third"}>Resume</Nav.Link>
          </LinkContainer>
        </motion.div>
      </Nav>
    </Navbar.Collapse>
    <Outlet />
  </Navbar>
)};

export default TopNav;
