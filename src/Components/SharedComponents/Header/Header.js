import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Fitbuzz</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link className='mx-2' as={Link} 
                        to="home">Home</Nav.Link>
                        <Nav.Link className='mx-2' as={Link} to="about">About</Nav.Link>
                        <Nav.Link className='mx-2' as={Link} to="blogs">Blogs</Nav.Link>
                        <Nav.Link className='mx-2' as={Link} to="login">
                            Login
                        </Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;