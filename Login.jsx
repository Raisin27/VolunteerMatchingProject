import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import React, { useEffect, useState, useRef } from "react";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
const Login = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const history = useHistory();
  const [userid, setUserId] = useState();
  const [pw, setPw] = useState();

  const handleSubmit = (e) =>{
    e.preventDefault();
    axios.post('http://localhost:3000/process/login', {
      userid: userid,
      pw: pw,
    }).then((response)=>{
      // console.log(response);
      if(response.data.message){
        alert("ID, 비번을 다시 확인하세요!");
      }
      else{
        if(response.data[0].object == "volunteer"){
          history.push(`/volunteer/${response.data[0].userid}`);
        }
        else{
          history.push(`/disable/${response.data[0].userid}`);
        }
        // history.push(`/process/home/${response.data[0].id}`);
      }
    })
  .catch(err => console.log(err))
  }

  return (
    <div>
      <Button variant="outline-warning" onClick={handleShow} className="me-2">
        로그인
      </Button>
      <Form action="/process/login" 
                      method="post">
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>로그인</Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>ID</Form.Label>
                    <Form.Control type="text" placeholder="ID 입력" name="userid" onChange={(e) => setUserId(e.target.value)} />
                    
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>비밀번호</Form.Label>
                    <Form.Control type="password" placeholder="비밀번호 입력" name="pw" onChange={(e) => setPw(e.target.value)} />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-warning" type="submit" onClick={handleSubmit}>
                  로그인
                </Button>
                <Button variant="outline-secondary" onClick={handleClose}>
                  닫기
                </Button>

            </Modal.Footer>
            <p className="align">계정 없다면 </p>
            <Link to ={'/signup'} className="col-md-5 mx-auto btn btn-outline-secondary signupbtn">회원가입</Link>
            </Modal> 
        </Form>

        </div>
    );
}
export default Login;