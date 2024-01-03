import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CarouselComponent from './CarouselComponent';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Login from './Login';
const Main = () =>{
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary" bg="secondary"data-bs-theme="secondary">
                <Container fluid>
                    <Navbar.Brand href="#">Volunteer Matching</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">Link</Nav.Link>
                        <NavDropdown title="Link" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">
                            Something else here
                        </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#" disabled>
                        Link
                        </Nav.Link>
                    </Nav>
                    
                    {/* <Link to={"/login"} className="btn btn-outline-primary"variant="outline-primary ">
                        로그인
                    </Link>
                    <Link to={"/signup"} className="btn btn-outline-success" variant="outline-success">
                        회원가입
                    </Link> */}
                    <Form className="d-flex">
                    {/* <Button variant="outline-primary" onClick={handleShow} className="me-2">
                    로그인
                    </Button> */}
                    <Login/>
                    
                    <Link to={"/signup"} className="btn btn-outline-success">
                        회원가입
                    </Link>
                    </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>로그인</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>ID</Form.Label>
                    <Form.Control type="text" placeholder="Enter ID" />
                   
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                
            </Form>
            </Modal.Body>
            <Modal.Footer>
                
                <Button variant="primary" onClick={handleClose}>
                Login
                </Button>
                <Button variant="secondary" onClick={handleClose}>
                Close
                </Button>
            </Modal.Footer>
            </Modal> */}
            <CarouselComponent/>
              

        </div>
    )
}
export default Main;
