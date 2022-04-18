import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css'
import logo from '../../images/logo11.png'

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
      };
      

    return (
        <Navbar className='fixed-top' collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img className='me-2' src={logo} alt="" />
                    Fitbuzz
                    </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link className='mx-2' as={Link} 
                        to="home">Home</Nav.Link>
                        <Nav.Link className='mx-2' as={Link} to="about">About</Nav.Link>
                        <Nav.Link className='mx-2' as={Link} to="blogs">Blogs</Nav.Link>
                        {user?
                        <button onClick={logout}>Sign out</button>:
                        <Nav.Link className='mx-2' as={Link} to="login">
                            Login
                        </Nav.Link>
                        }
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;