import Volunteer from "./Volunteer";
import Container from 'react-bootstrap/Container';
import UseFetch from './UseFetch';
import { useState, useEffect } from "react";
import { useMap, Map, MapTypeControl, ZoomControl, MapMarker } from "react-kakao-maps-sdk" ;
import useKakaoLoader from "./useKakaoLoader";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import EventMarkerContainer from "./EventMarkerContainer";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const DisableMode=(user)=>{
  const volunteers = UseFetch("http://localhost:3000/process/volunteersList");

  useKakaoLoader();
  const [state, setState] = useState({
    center: {
      lat: 33.450701,
      lng: 126.570667,
    },
    errMsg: null,
    isLoading: true,
  })

  useEffect(() => {
    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setState((prev) => ({
            ...prev,
            center: {
              lat: position.coords.latitude, // 위도
              lng: position.coords.longitude, // 경도
            },
            isLoading: false,
          }))
        },
        (err) => {
          setState((prev) => ({
            ...prev,
            errMsg: err.message,
            isLoading: false,
          }))
        }
      )
    } else {
      // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
      setState((prev) => ({
        ...prev,
        errMsg: "geolocation을 사용할수 없어요..",
        isLoading: false,
      }))
    }
  }, [])

  const [list, setList] = useState(null);
  // const _list = `
  // <div id="menu_wrap" class="bg_white">
  // <div id="placesList">
  //   {volunteers.map((volunteer)=>{ 
  //     return( 
  //       <>
  //       <Volunteer volunteer={volunteer} key={volunteer.id}/>
  //       </>
  //     )
  //   }
  //   )
  // }
  // </div>
  // </div>`;
  // const handleList=()=>{
  //   if(list == null){
  //     setList('show');
  //   }
  //   else{
  //     setList(null);
  //   }
  // }
   
    const {userid} = useParams();
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
                        <Nav.Link href="#">봉사정보</Nav.Link>
                        <Nav.Link href="#">고객센터</Nav.Link>
                        <Nav.Link href="#">사이트 안내</Nav.Link>

                    </Nav> 
                    
                    <Link to ={`/disable/${userid}`} className="link">
                    <span className="text_white">Hello {userid}</span>
                    </Link> 

                    
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="map_wrap" id="map_wrap">
              <div id="menu_wrap" class="bg_white">
                <div id="placesList">
                  {volunteers.map((volunteer)=>{ return(<><Volunteer volunteer={volunteer} key={volunteer.id}/></>)})}
                </div>
              </div>
              
              <div id="map" style={{
                width:"100%",
                height:"100%",
                position:"relative",
                overflow:"hidden"}}
              >
                <Map // 지도를 표시할 Container
                  center={state.center}
                  style={{
                  width: "100%",
                  height: "800px",
                  }}
                  level={10} // 지도의 확대 레벨
              >
                {volunteers.map((volunteer)=>{
                    return(
                    <EventMarkerContainer 
                        key={volunteer.id}
                        lat={volunteer.lat}
                        lng={volunteer.lng}
                        image={volunteer.image}
                        name={volunteer.name}
                        age={volunteer.age}
                    />
                    
                    )
                  })  
                }

                {!state.isLoading && (
                <MapMarker position={state.center}>
                    <div style={{ padding: "5px", color: "#000" , margin:"0 auto"}}>
                    {state.errMsg ? state.errMsg : `여기에 계신가요?!`}
                    </div>
                </MapMarker>
                )}
                <MapTypeControl position={"TOPRIGHT"} />
                <ZoomControl position={"RIGHT"} />
              </Map>
              </div>
            </div>
            
    {/* </Container> */}
    </>
    )}
export default DisableMode;
