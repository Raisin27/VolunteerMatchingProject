
import CarouselComponent from './CarouselComponent';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Login from './Login';
import Header from './Header';
import Form from 'react-bootstrap/Form';
import Status from './Status';

const Home = () =>{
    return (
        <div>
            <Header/>
            <CarouselComponent/>
            <Status/>

        </div>
    )
}
export default Home;
