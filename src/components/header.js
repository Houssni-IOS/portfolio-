import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar >
            <Container>
                <Navbar.Brand href="#home">

                    {' '}
                    <strong>Titre du Portfo</strong>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar" />
                <Navbar.Collapse id="basic-navbar">
                    <Nav className="me-auto">
                        <Nav.Link href="#experiences">Experiences   </Nav.Link>
                        <Nav.Link href="#formations">Formations</Nav.Link>
                        <Nav.Link href="#projet">Projet</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
