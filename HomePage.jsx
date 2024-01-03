import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Table from 'react-bootstrap/Table';
import UseFetch from "./UseFetch";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from "react-bootstrap/esm/Container";

const HomePage = (user) =>{

    const {userid} = useParams();

    const volunteerData = UseFetch(`http://localhost:3000/process/volunteer/${userid}`);

    console.log(volunteerData);

        return(
            <>
            {/* <Container fluid> */}
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
                        <Nav.Link href={`/volunteerinformation/${userid}`}>봉사활동처</Nav.Link>
                        <Nav.Link href="/#">고객센터</Nav.Link>
                        <Nav.Link href="/#">사이트 안내</Nav.Link>

                    </Nav> 
                    
                    <Link to ={`/volunteer/${userid}`} className="link">
                    <span className="text_white">Hello {userid}</span>
                    </Link>

                    
                    </Navbar.Collapse>
                </Container>
                </Navbar>
                <div>
                <h1  className="information-header">
                매칭 현황 <Link to = {`/addvolunteer/${userid}`} className="btn btn-warning addvol-btn">봉사신청</Link>
                </h1>
                <Container fluid="sm">
                <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>기간</th>
                                <th>주소</th>
                                <th>매칭했는지</th>
                            </tr>
                        </thead>
                        {volunteerData.map((userdata)=>(
                        <tbody>
                                <tr>
                                    <td>{userdata.duration}</td>
                                    <td>{userdata.addr}</td>
                                    <td>
                                    { userdata.isMatched === 1 && <span>매칭됨</span>}
                                    </td>
                                </tr>
                        </tbody>
                        ))}

                    </Table>
                    </Container>
                    </div>
        {/* </Container>     */}
            </>
        )
    }
export default HomePage;