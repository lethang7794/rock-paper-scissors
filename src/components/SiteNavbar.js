import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const SiteNavbar = () => (
  <Navbar bg='light' expand='lg'>
    <Navbar.Brand href='#home'>Rock Paper Scissors</Navbar.Brand>
    <Navbar.Toggle aria-controls='basic-navbar-nav' />
    <Navbar.Collapse id='basic-navbar-nav'>
      <Nav className='mr-auto'>
        <Nav.Link href='https://github.com/lethang7794/rock-paper-scissors'>
          Github
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default SiteNavbar;
