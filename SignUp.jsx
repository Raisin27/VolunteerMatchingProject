import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import React, { useEffect, useState, useRef } from "react";
import {post} from 'axios';
import Postcode from './Postcode';
import axios from "axios";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const SignUp = () => {
    const useridRef = useRef(null);
    const pwRef = useRef(null);
    const nameRef = useRef(null);
    const birthRef = useRef(null);
    const addrRef = useRef(null);
    const addrdetailRef = useRef(null);
    const objectRef = useRef(null);
    
    const history = useHistory();
    const [selectedOption, setSelectedOption] = useState("volunteer") ; 

    const addUser = (e) =>{
            e.preventDefault();
            console.log(selectedOption);
            if (useridRef.current.value === "" || useridRef.current.value === undefined) {
            alert("아이디를 입력하세요!!!");
            useridRef.current.focus();
            return false;
            }
            if (pwRef.current.value === "" || pwRef.current.value === undefined) {
                alert("패스워드를 입력하세요!!!");
                pwRef.current.focus();
                return false;
            }
            if (nameRef.current.value === "" || nameRef.current.value === undefined) {
                alert("이름을 입력하세요!!!");
                nameRef.current.focus();
                return false;
            }
            if (birthRef.current.value === "" || birthRef.current.value === undefined) {
                alert("생년월일을 입력하세요!!!");
                birthRef.current.focus();
                return false;
            }
            if (addrdetailRef.current.value === "" || addrdetailRef.current.value === undefined) {
                alert("상새주소를 입력하세요!!!");
                addrdetailRef.current.focus();
                return false;
            }
            if (objectRef.current.value === "" || objectRef.current.value === undefined) {
                alert("옵션을 입력하세요!!!");
                objectRef.current.focus();
                return false;
            }
            axios.post("http://localhost:3000/process/signup", {
                userid: useridRef.current.value,
                pw: pwRef.current.value,
                name: nameRef.current.value,
                birth: birthRef.current.value,
                addr: addrRef.current.value,
                addrdetail: addrdetailRef.current.value,
                object: objectRef.current.value,
            })
            .then((res) => {
                console.log("addUser =>", res);
                // 로그인 성공여부는 res.data.affectedRows가 0인지 1인지 확인하면 됨
                if (res.data.affectedRows === 1) alert("회원가입 성공!!!");
                else alert("회원가입 실패!!!");
                history.push('/');
            })
            .catch((e) => {
                console.error(e);
            });
        }
    const [signup, setSignup] = useState({
        address:'',
    });
    
    const [popup, setPopup] = useState(false);
    
    const handleInput = (e) => {
        setSignup({
            ...signup,
            [e.target.name]:e.target.value,
        })
    }
    
    const handleComplete = (data) => {
        setPopup(!popup);
    }

    return(
        <>
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
                        <Nav.Link href={`/#`}>정보</Nav.Link>
                        <Nav.Link href="/#">고객센터</Nav.Link>
                        <Nav.Link href="/#">사이트 안내</Nav.Link>

                    </Nav> 
                    </Navbar.Collapse>
                </Container>
                </Navbar>
        <div className='signup'>
            <Container fluid>
                <Row>
                    <Col>
                        <Image className="s-img" src="./images/signup.jpg" alt="SignUp" width="100%" height="100%"/> 
                    </Col>
                    <Col>
                        <div className="titles">Sign Up NOW!!!</div>
                        <Form onSubmit={addUser} 
                            >
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>ID</Form.Label>
                                    <Form.Control 
                                        type="text"
                                        placeholder="예: hong123"
                                        name="userid"
                                        ref={useridRef} />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>비밀번호</Form.Label>
                                    <Form.Control 
                                        type="password"
                                        placeholder="비밀번호 입력"
                                        name="pw"
                                        ref={pwRef} />
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group className="mb-3" as={Col} controlId="formGridName">
                                    <Form.Label>이름</Form.Label>
                                    <Form.Control 
                                        type="text"
                                        placeholder="이름을 입력하세요"
                                        name="name"
                                        ref={nameRef} />                            
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>생년월일</Form.Label>
                                    <Form.Control 
                                    type="text"
                                    placeholder="생년월일 입력"
                                    name="birth"
                                    ref={birthRef} />
                                    
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Label>Address</Form.Label>
                                <Form.Group controlId="formAddrBtn"as={Col} >
                                    <Button onClick={handleComplete} variant="secondary" style={{float:'left'}}>주소 찾기</Button>
                                    {popup && <Postcode user={signup} setUser={setSignup}></Postcode>}
                                </Form.Group>
                                <Form.Group controlId="formBasicAddress"as={Col}>    
                                {/* <NameForm/>                                 */}
                                    <Form.Control                                          
                                        placeholder="주소"  
                                        type="text" 
                                        required={true}
                                        name="addr"                                    
                                        ref={addrRef}
                                        onChange={handleInput} 
                                        value={signup.address}
                                        disabled
                                    />
                                </Form.Group>
                                <Form.Group controlId="formDetailedAddress"as={Col}>                                    
                                    <Form.Control                                          
                                        placeholder="상세주소"  
                                        type="text" 
                                        name="addrdetail"                                    
                                        ref={addrdetailRef}
                                    />
                                </Form.Group>
                            </Row>
                            <Row className="mb-3" key='inline-radio' >
                                <Form.Label>대상자</Form.Label>
                                <Form.Group controlId="formObject"as={Col} 
                                >
                                    <Form.Control                                          
                                        placeholder="장애인이면 'disabled', 봉사자이면 'volunteer'을 입력하세요 "  
                                        type="text" 
                                        name="object"                                    
                                        ref={objectRef}
                                    />
                                    {/* <Form.Check // prettier-ignore
                                        inline
                                        label="봉사자"
                                        name="object"
                                        type="radio"
                                        id="inline-radio-1"
                                        value="volunteer"
                                        // ref={objectRef}
                                        checked={selectedOption}
                                        onChange={handleChange}
                                    />
                                    <Form.Check // prettier-ignore
                                        inline
                                        label="장애인"
                                        name="object"
                                        type="radio"
                                        id="inline-radio-2"
                                        value="disabled"
                                        // ref={objectRef}
                                        checked={selectedOption}
                                        onChange={handleChange}
                                    /> */}
                                    
                                </Form.Group>
                            </Row>
                            <Button variant="warning" type="submit" className="signupbtn" > 가입 </Button>
                        </Form>
                    </Col> 
                </Row>
            </Container>
        </div>
        </>
    )
}

export default SignUp;