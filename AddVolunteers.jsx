import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import {useRef, useEffect, useState } from "react";
import {post} from "axios";
import Postcode from './Postcode';
// import SmallMap from './SmallMap';
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
// import { useMap, Map, MapTypeControl, ZoomControl, MapMarker } from "react-kakao-maps-sdk" ;
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import UserLogo from './UserLogo';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const AddVolunteers = (user) => {
    const {userid} = useParams();


    const [file, setFile] = useState(null);
    const volIdRef = useRef(null);
    const nameRef = useRef(null);
    const ageRef = useRef(null);
    const addrRef = useRef(null);
    const latRef = useRef(null);
    const lngRef = useRef(null);
    const fileRef = useRef(null);
    const durationRef = useRef(null);
    const history = useHistory();

    const addVolunteer = ()=>{
        console.log("addVolunteer()=>");
        
        const url = 'http://localhost:3000/process/volunteersUpload/'+{userid};
        const formData = new FormData();
        formData.append('filename', file.name);
        console.log(file);
        formData.append('file',file);
        formData.append('volunteerid', volIdRef.current.value);
        formData.append('name',nameRef.current.value);
        formData.append('age',ageRef.current.value);
        formData.append('addr',addrRef.current.value);
        formData.append('lat',latRef.current.value);
        formData.append('lng',lngRef.current.value);
        formData.append('duration',durationRef.current.value);

        const config = {
            headers:{
                'content-type':'multipart/form-data'
            }
        }
        return post(url, formData, config);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addVolunteer();
        // console.log(e);
        alert("봉사 신청 성공합니다!");
        window.location.reload();
        history.push(`/process/volunteer/${userid}`);
    }
    const saveFile = (e) => {
        return setFile(e.target.files[0]);
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

    const { kakao } = window;
    const [map, setMap] = useState();
    const [marker, setMarker] = useState();
    const [searchLat, setSearchLat] = useState({lat: ''});
    const [searchLng, setSearchLng] = useState({lng: ''});

    // 1) 카카오맵 불러오기
    useEffect(() => {
        kakao.maps.load(() => {
        const container = document.getElementById("small-map");
        const options = {
            center: new window.kakao.maps.LatLng(33.450701, 126.570667),
            level: 3,
        };
        setMap(new window.kakao.maps.Map(container, options));
        setMarker(new window.kakao.maps.Marker());
        

        });
    }, []);
    // 2) 검색된 주소 위치 표시
 const searchMap = () => {
    // 3) 주소 검색
      // 4) 검색된 주소 클릭 시 콜백 함수
    //   var services = kakao.maps.services;
        var geocoder = new window.kakao.maps.services.Geocoder();
        geocoder.addressSearch(signup.address,  // 검색된 주소
            function (result, status) {
            // 5) 성공시 좌표 값을 가져온다.
            if (status === window.kakao.maps.services.Status.OK) {
                var currentPos = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x
                );
                let latSearch = currentPos.getLat();
                let lngSearch = currentPos.getLng();
                // (document.getElementsByName("lat")).value =
                // currentPos.getLat();
                // (document.getElementsByName("lng")).value =
                // currentPos.getLng();
                // console.log((document.getElementsByName("lat")).value);
                // console.log(currentPos.getLat());
                // console.log((document.getElementsByName("lng")).value);

                console.log(latSearch, lngSearch);
                
                map.panTo(currentPos);
                // 결과값으로 받은 위치를 마커로 표시합니다
                marker.setMap(null);
                marker.setPosition(currentPos);
                marker.setMap(map);
                setSearchLat({lat: latSearch});
                setSearchLng({lng: lngSearch});

            }
          }
        );
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
                        <Nav.Link href="/volunteerinformation">봉사활동처</Nav.Link>
                        <Nav.Link href="/customerCenter">고객센터</Nav.Link>
                        <Nav.Link href="/about">사이트 안내</Nav.Link>

                    </Nav> 
                    
                    {/* <Form className="d-flex"><Login/></Form> */}
                    <UserLogo key={user.id}/>

                    
                    </Navbar.Collapse>
                </Container>
                </Navbar>
        <div className='signup'>
            <Container fluid='sm'>
            <Row>
            <Col>
                <Form onSubmit={handleSubmit}>
                    <div className="titles">봉사 신청</div>
                    <Row className="mb-3">
                        <Form.Group className="mb-3" as={Col} controlId="formGridEmail">
                            <Form.Label>ID</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="volunteerid"
                                placeholder="ID 입력" 
                                ref={volIdRef}
                                value={userid}
                                disabled
                            />
                        
                        </Form.Group>
                        <Form.Group className="mb-3" as={Col} controlId="formGridName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control 
                            type="text" 
                            placeholder="이름 입력"
                            name="name"
                            ref={nameRef}
                            />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>File Upload</Form.Label>
                        <Form.Control 
                            type="file"
                            name="file"
                            ref={fileRef}
                            onChange={saveFile} />
                        </Form.Group>
                    
                    </Row>
                    <Row className="mb-3">
                        <Form.Label>Address</Form.Label>
                            <Form.Group controlId="formAddrBtn"as={Col} className='d-grid gap-2' sm={4}>
                                <Button onClick={handleComplete} variant="secondary" style={{float:'left'}}>주소 찾기</Button>
                                {popup && <Postcode user={signup} setUser={setSignup}></Postcode>}
                            </Form.Group>
                            <Form.Group controlId="formBasicAddress"as={Col} sm={8}>    
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
                            
                    </Row>
                    <Row className="mb-3">
                        <div id="small-map" 
                            style={{
                                width: "99%",
                                height: "300px",
                                margin: "0 20px 0 0",

                            }}>
                        </div>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group controlId="formLat"as={Col}>  
                            <Form.Control 
                                type="text" 
                                placeholder="경도"
                                name="lat"
                                ref={latRef}
                                value={searchLat.lat}
                                disabled
                                />
                        </Form.Group>
                        <Form.Group controlId="formLng"as={Col}>  
                            <Form.Control 
                                type="text" 
                                placeholder="위도"
                                name="lng"
                                ref={lngRef}
                                value={searchLng.lng}
                                disabled
                                />
                        </Form.Group>
                        <Form.Group controlId="formSearchAddress"as={Col} className='d-grid gap-2'>    
                                <Button 
                                onClick={searchMap} 
                                variant="secondary" style={{float:'right'}}>경도, 위도 검색</Button>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group className="mb-3" controlId="formAge" as={Col}>
                            <Form.Label>Age</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Enter 나이" 
                                name="age"
                                ref={ageRef}
                            />
                        </Form.Group>
                    
                        <Form.Group className="mb-3" controlId="formDuration" as={Col}>
                            <Form.Label>Duration</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="duration"
                                ref={durationRef}
                                placeholder="예: 2023.05.12" />
                            
                        </Form.Group>
                    </Row>
                    <Button variant="warning" type="submit">
                        신청
                    </Button>
                </Form>
            </Col>
            <Col>
                <Image className="s-img" src="/images/volunteeradd.jpg" 
                width="600px" height="1000px" 
                /> 
            </Col>
        </Row>
        </Container>
    </div>
    </>
    )
}
export default AddVolunteers;