import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Login from './Login';
import UserLogo from './UserLogo';
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
const Header = (user) =>{
    const {userid} = useParams();
    return (
        <div
        key = {user.id}
        >
        <Navbar expand="lg" className="bg-body-tertiary" bg="dark"data-bs-theme="dark">
                <Container fluid="sm">
                    <Navbar.Brand href="/">Volunteer Matching</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0 justify-content-center"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#">정보</Nav.Link>
                        <Nav.Link href="#">고객센터</Nav.Link>
                        <Nav.Link href="#">사이트 안내</Nav.Link>

                    </Nav> 
                    
                    <Form className="d-flex"><Login/></Form>
                    {/* <UserLogo key={user.id}/> */}

                    
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </div>
    )
}
export default Header;