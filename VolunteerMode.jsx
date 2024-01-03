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
import MainPage from './Home';
const VolunteerMode = () =>{
    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    return (
        <div>
            <MainPage/>
            
              

        </div>
    )
}
export default VolunteerMode;
