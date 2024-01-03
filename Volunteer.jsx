import { useEffect, useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import UseFetch from './UseFetch';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import {useParams} from "react-router-dom";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Matching from './Matching';
import Cancel from './Cancel';
const Volunteer = ({volunteer})=>{
    return(
        <div>
            <ListGroup variant="flush" style={{textAlign:"center"}} className='item'>
                    <ListGroup.Item>
                                <Card>
                                    <Card.Body>
                                        <Card.Title className='ms-2 me-auto d-flex'>
                                        <Stack direction="horizontal" gap={5} >
                                            <Card.Img 
                                                variant="top" 
                                                src={volunteer.image}
                                                style={{width:'35px',height:'35px'}} 
                                            />
                                            <div className="fw-bold">{volunteer.name} {volunteer.age}살</div>
                                            <div className='d-flex'>
                                            <Matching id={volunteer.id}/>
                                            {/* <span style={{margin:'0 5px'}}/>
                                            <Cancel id={volunteer.id}/> */}
                                            </div>
                                            </Stack>
                                            </Card.Title>                                    
                                        <Card.Text>                                        
                                            {volunteer.addr}<br/>
                                            {volunteer.duration}까지
                                        {/* {volunteer.lat}
                                        {volunteer.lng} */}
                                        </Card.Text>
                                        
                                    </Card.Body>
                                </Card>                                                    
                    </ListGroup.Item>
                    
                </ListGroup>
            
        </div>
    )
}
export default Volunteer;