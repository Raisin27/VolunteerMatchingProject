import { useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import UseFetch from "./UseFetch";
import convert from 'xml-js';
import {Container, Col, Row, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import UserLogo from './UserLogo';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ListGroup from 'react-bootstrap/ListGroup';

const Information = (user) =>{
    const {userid} = useParams();
    
    // let centId = 0;
    // const [areaCode, setAreaCode] = useState("");
    // const [result, setResult] = useState({});
    // const [centList, setCentList] = useState([]);

    const [centName, setCentName] = useState([]);
    const [telNum, setTelNum] = useState([]);
    const [centTypeName, setCentTypeName] = useState([]);

    const url_seoul = `http://localhost:5000/centerList/api/seoul`;
    const url_busan = `http://localhost:5000/centerList/api/busan`;
    const url_daegu = `http://localhost:5000/centerList/api/daegu`;
    const url_gyeonggi = `http://localhost:5000/centerList/api/gyeonggi`;
    const url_jeju = `http://localhost:5000/centerList/api/jeju`;
    // const url = `http://apis.data.go.kr/B460014/vmsdataview/getCenterList?serviceKey=Tb6v%2B1IRvKdFeie1ahQAYlTsX8WTdV8ug%2B4ZRIzVFAFO5goqgabRr3ihVlHjjO9IAbv2noI7VYDsvpAD0lyFtQ%3D%3D
    // &numOfRows=10&pageNo=1&areaCode=${areaCode}`;
    const searchActivitiesSeoul = () =>{
            axios
            .get(url_seoul,{} )
            .then(function(res){
                // console.log(res);
                // console.log(res.data.elements[0].elements[1].elements[0].elements[0]);
                const dataList = res.data.elements[0].elements[1].elements[0].elements;
                // console.log(dataList);//array
                console.log(dataList.length);
                let centerName = [];
                let telNumber = [];
                let centType = [];

                for(let i=0; i<dataList.length; i++){
                    console.log(dataList[i]);
                    // console.log(dataList[i].elements);//object
                    // var index = dataList.map((o) => o.name).indexOf("addr");
                    // console.log(index);
                    // console.log(dataList[i].elements[1].elements, i);//array-centername
                    // console.log(dataList[i].elements[index].elements, i);//array-centername
                    // console.log(dataList[i].elements[j].elements,i,j);//array [{...}] j=1 centerName
                    console.log(dataList[i].elements[1].elements);
                    console.log(dataList[i].elements[4].elements);
                    // console.log(dataList[i].elements[3].elements);
                    console.log(dataList[i].elements[3].elements);
                        for(let z=0; z<1; z++){
                            // console.log(dataList[i].elements[1].elements[z].text);//centerName
                            console.log(dataList[i].elements[1].elements[z].text);//centerName 성동나래주간보호센터
                            console.log(dataList[i].elements[4].elements[z]);//centerName 성동나래주간보호센터

                            telNumber.push(dataList[i].elements[4].elements[z]);
                            centerName.push(dataList[i].elements[1].elements[z]);
                            centType.push(dataList[i].elements[3].elements[z]);
                        //     // setCentName(dataList[i].elements[1].elements[z].text);
                        }
                    
                }
                console.log(centerName);
                console.log(telNumber);
                console.log(centType);
                // setCentName(centName => [...centName, centerName]);
                setCentName(centerName);
                setTelNum(telNumber);
                setCentTypeName(centType); 
            })
            .catch(function(err){
                console.log(err);
            });
    //     }
    }
    const searchActivitiesBusan = () =>{
                axios
                .get(url_busan,{} )
                .then(function(res){
                    // console.log(res);
                    // console.log(res.data.elements[0].elements[1].elements[0].elements[0]);
                    const dataList = res.data.elements[0].elements[1].elements[0].elements;
                    // console.log(dataList);//array
                    console.log(dataList.length);
                    let centerName = [];
                    let telNumber = [];
                    let centType = [];


                    for(let i=0; i<dataList.length; i++){
                        console.log(dataList[i].elements[1].elements, i);//array-center
                        //     // console.log(dataList[i].elements[j].elements,i,j);//array [{...}] j=1 centerName
                            console.log(dataList[i].elements[4].elements);
                            console.log(dataList[i].elements[3].elements);
                            for(let z=0; z<1; z++){
                                // console.log(dataList[i].elements[1].elements[z].text);//centerName
                                console.log(dataList[i].elements[1].elements[z].text);//centerName 성동나래주간보호센터
                                console.log(dataList[i].elements[4].elements[z]);//centerName 성동나래주간보호센터

                                telNumber.push(dataList[i].elements[4].elements[z]);
                                centerName.push(dataList[i].elements[1].elements[z]);
                                centType.push(dataList[i].elements[3].elements[z]);
                            //     // setCentName(dataList[i].elements[1].elements[z].text);
                            }
                        // }
                    }
                    console.log(centerName);
                    console.log(telNumber);
                    console.log(centType);
                    setCentName(centerName);
                    setTelNum(telNumber);
                    setCentTypeName(centType);
                    
                })
                .catch(function(err){
                    console.log(err);
                });
    }
    const searchActivitiesDaegu = () =>{
        axios
        .get(url_daegu,{} )
        .then(function(res){
            // console.log(res);
            // console.log(res.data.elements[0].elements[1].elements[0].elements[0]);
            const dataList = res.data.elements[0].elements[1].elements[0].elements;
            // console.log(dataList);//array
            console.log(dataList.length);
            let centerName = [];
            let telNumber = [];
            let centType = [];

            for(let i=0; i<dataList.length; i++){
                console.log(dataList[i].elements[1].elements, i);//array-center
                //     // console.log(dataList[i].elements[j].elements,i,j);//array [{...}] j=1 centerName
                    console.log(dataList[i].elements[4].elements);
                    console.log(dataList[i].elements[3].elements);
                    for(let z=0; z<1; z++){
                        // console.log(dataList[i].elements[1].elements[z].text);//centerName
                        console.log(dataList[i].elements[1].elements[z].text);//centerName 성동나래주간보호센터
                        console.log(dataList[i].elements[4].elements[z]);//centerName 성동나래주간보호센터

                        telNumber.push(dataList[i].elements[4].elements[z]);
                        centerName.push(dataList[i].elements[1].elements[z]);
                        centType.push(dataList[i].elements[3].elements[z]);
                    //     // setCentName(dataList[i].elements[1].elements[z].text);
                    }
                // }
            }
            console.log(centerName);
            console.log(telNumber);
            setCentName(centerName);
            setTelNum(telNumber);
            setCentTypeName(centType);
            
        })
        .catch(function(err){
            console.log(err);
        });
    }
    const searchActivitiesGyeonggi = () =>{
        axios
        .get(url_gyeonggi,{} )
        .then(function(res){
            // console.log(res);
            // console.log(res.data.elements[0].elements[1].elements[0].elements[0]);
            const dataList = res.data.elements[0].elements[1].elements[0].elements;
            // console.log(dataList);//array
            console.log(dataList.length);
            let centerName = [];
            let telNumber = [];
            let centType = [];

            for(let i=0; i<dataList.length; i++){
                console.log(dataList[i].elements[1].elements, i);//array-center
                //     // console.log(dataList[i].elements[j].elements,i,j);//array [{...}] j=1 centerName
                    console.log(dataList[i].elements[4].elements);
                    console.log(dataList[i].elements[3].elements);
                    for(let z=0; z<1; z++){
                        // console.log(dataList[i].elements[1].elements[z].text);//centerName
                        console.log(dataList[i].elements[1].elements[z].text);//centerName 성동나래주간보호센터
                        console.log(dataList[i].elements[4].elements[z]);//centerName 성동나래주간보호센터

                        telNumber.push(dataList[i].elements[4].elements[z]);
                        centerName.push(dataList[i].elements[1].elements[z]);
                        centType.push(dataList[i].elements[3].elements[z]);
                    //     // setCentName(dataList[i].elements[1].elements[z].text);
                    }
                // }
            }
            console.log(centerName);
            console.log(telNumber);
            setCentName(centerName);
            setTelNum(telNumber);
            setCentTypeName(centType);
            
        })
        .catch(function(err){
            console.log(err);
        });
    }
    const searchActivitiesJeju = () =>{
        axios
        .get(url_jeju,{} )
        .then(function(res){
            // console.log(res);
            // console.log(res.data.elements[0].elements[1].elements[0].elements[0]);
            const dataList = res.data.elements[0].elements[1].elements[0].elements;
            // console.log(dataList);//array
            console.log(dataList.length);
            let centerName = [];
            let telNumber = [];
            let centType = [];

            for(let i=0; i<dataList.length; i++){
                console.log(dataList[i].elements[1].elements, i);//array-center
                //     // console.log(dataList[i].elements[j].elements,i,j);//array [{...}] j=1 centerName
                    console.log(dataList[i].elements[4].elements);
                    console.log(dataList[i].elements[3].elements);
                    for(let z=0; z<1; z++){
                        // console.log(dataList[i].elements[1].elements[z].text);//centerName
                        console.log(dataList[i].elements[1].elements[z].text);//centerName 성동나래주간보호센터
                        console.log(dataList[i].elements[4].elements[z]);//centerName 성동나래주간보호센터

                        telNumber.push(dataList[i].elements[4].elements[z]);
                        centerName.push(dataList[i].elements[1].elements[z]);
                        centType.push(dataList[i].elements[3].elements[z]);
                    //     // setCentName(dataList[i].elements[1].elements[z].text);
                    }
                // }
            }
            console.log(centerName);
            console.log(telNumber);
            setCentName(centerName);
            setTelNum(telNumber);
            setCentTypeName(centType);
            
        })
        .catch(function(err){
            console.log(err);
        });
    }

    return (
        // &areaCode=${areaCode}
        <div>
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
                        <Nav.Link href="#">고객센터</Nav.Link>
                        <Nav.Link href="#">사이트 안내</Nav.Link>

                    </Nav> 
                    
                    {/* <Form className="d-flex"><Login/></Form> */}
                    <UserLogo key={user.id}/>

                    
                    </Navbar.Collapse>
                </Container>
                </Navbar>
            <h1 className="information-header">봉사활동처 정보</h1>
            <div>
                <Container >
                
                <Row className="justify-content-md-center">
                    <Col xs lg="1">
                    {/* <button onClick={searchActivitiesSeoul}><image src="/public/images/pic2.jpg"/>서울</button> */}
                    <div className="infor-btn" onClick={searchActivitiesSeoul}>서울</div>
                    </Col >
                    <Col xs lg="1">
                    <div className="infor-btn btn2"onClick={searchActivitiesBusan}>부산</div>
                    </Col >
                    <Col xs lg="1">
                    <div className="infor-btn btn3"onClick={searchActivitiesDaegu}>대구</div>
                    </Col>
                    <Col xs lg="1">
                    <div className="infor-btn btn4" onClick={searchActivitiesGyeonggi}>경기</div>
                    </Col>
                    <Col xs lg="1">
                    <div className="infor-btn btn5" onClick={searchActivitiesJeju}>제주</div>
                    </Col>
                </Row>
                </Container>

            </div>
            <div>
                <Container >
                    <Row className="justify-content-md-center">
                        <Col style={{padding: 0}} xs>
                            <ListGroup>
                                {centName.map((cent)=>(
                                    <ListGroup.Item key={cent.text} className="fw-bold" variant="light" style={{ overflow: 'hidden'}}>{cent.text}</ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Col>
                        <Col style={{padding: 0}} xs>
                            <ListGroup>
                                {telNum.map((tel)=>(
                                    <ListGroup.Item key={tel.text} variant="light">{tel.text}</ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Col>
                        <Col style={{padding: 0}} xs>
                            <ListGroup>
                                {centTypeName.map((center, index)=>(
                                    <ListGroup.Item key={index} variant="light">{center.text}</ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Col>
                    </Row>
                    {/* <ListGroup>
                        {centName.map((cent)=>(
                        <ListGroup.Item key={cent.text}>{cent.text}</ListGroup.Item>
                        
                        ))}
                    </ListGroup> */}
                       

                        {/* <ol>
                        {centList.map((center, index)=>(
                            <li key={index}> {center.name} , {center.tel}</li>
                        ))}
                        </ol> */}
                    {/* <Row md={4}>
                        {centName.map((center)=>{
                            <Col key={center}> {center} </Col>
                        
                        })} */}
                        {/* <Col>
                        지역명
                        봉사활동처명 {centName}
                        분야명
                        전화번호
                        담당자
                        </Col>
                        <Col>2 </Col>
                        <Col>3 </Col>
                        <Col>4</Col> */}
                        {/* {result.map((center)=> {
                            <>
                            
                            </>
                        })} */}
                        {/* <Col>{result.elements.elements.text}</Col> */}
                        
                    
                            
                    
                        
                    {/* </Row> */}
                </Container>
            </div>

        </div>
    )
}
export default Information;
// serviceKey
// https://apis.data.go.kr/B460014/vmsdataview/getVollcolectionList
// B2sn6TcneNuCPobTCfMBONb3aoxyvarSZdjJp4eOyBZUHx3SrquqhLBkj%2FArL0SLkcM%2FTSCcqlPZ7Zgh4b2gSQ%3D%3D
// http://apis.data.go.kr/B460014/vmsdataview/getVollcolectionList
// ?serviceKey=B2sn6TcneNuCPobTCfMBONb3aoxyvarSZdjJp4eOyBZUHx3SrquqhLBkj%2FArL0SLkcM%2FTSCcqlPZ7Zgh4b2gSQ%3D%3D
// &
// numOfRows=10
// &pageNo=1
// &strDate=2017-08-01
// &endDate=2017-09-01
// &areaCode=0101
