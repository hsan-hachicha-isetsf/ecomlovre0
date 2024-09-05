"use client";

import { Container, Nav, Navbar } from 'react-bootstrap'

import HomeIcon from "@mui/icons-material/Home"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import HelpIcon from "@mui/icons-material/Help";
import Link from 'next/link';

const Menu = () => {
  return (
    <div>
      <Navbar bg='dark' data-bs-theme='dark'>
        <Container>
          <Navbar.Brand href='#home'>Books Universe</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link as={Link} href='/'>
              <HomeIcon />Home
            </Nav.Link>
            <Nav.Link as={Link} href='/'>
              <AccountCircleIcon />Se connecter
            </Nav.Link>
            <Nav.Link as={Link} href='/'>
              <HelpIcon />Aide
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Menu