import { Link } from 'next/link';
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPaper } from '@fortawesome/free-solid-svg-icons';
// import { LinkContainer } from 'react-router-bootstrap';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="sm" sticky="top">
        <Navbar.Brand href="/">
          <FontAwesomeIcon icon={faHandPaper} /> VOICify
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="https://voice-bay.vercel.app/">Live Video Call</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="container">
        <div>{children}</div>
      </div>
    </>
  );
};

export default Layout;
