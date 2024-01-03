import { useState, useEffect } from "react";
import { useMap, Map, MapTypeControl, ZoomControl, MapMarker } from "react-kakao-maps-sdk" ;
import UseFetch from "./UseFetch";
import Marker from "./Marker";
import Button from "react-bootstrap/esm/Button";
import useKakaoLoader from "./useKakaoLoader";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import EventMarkerContainer from "./EventMarkerContainer";

const MapKaKao = ()=>{
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
  
  const volunteers = UseFetch("http://localhost:3000/process/volunteersList");
  // const EventMarkerContainer = (props) =>{
  //   const map = useMap();
  //   const [isVisible, setIsVisible] = useState(false);



  //   return(
  //     <MapMarker 
  //             key={props.id}
  //             title={props.addr}
  //             position={{
  //               lat: parseFloat(`${props.lat}`), 
  //               lng: parseFloat(`${props.lng}`)
  //             }}
  //             image={{
  //               src: `${props.image}`, // 마커이미지의 주소입니다
  //               size: {
  //                 width: 50,
  //                 height: 65,
  //               }, // 마커이미지의 크기입니다
  //               options: {
  //                 offset: {
  //                   x: 27,
  //                   y: 69,
  //                 }
  //               }
  //             }}
  //             clickable={true}
  //             onMouseOver={() => setIsVisible(true)}
  //             onMouseOut={() => setIsVisible(false)}
  //             onClick={(e) => {
                
  //               // e.preventDefault();
  //               // props.onChangePage(props.id);
  //               console.log(e);
  //             }}
  //     >
  //       {isVisible && (
  //         <div key={props.id} style={{ padding: "5px", color: "#000", margin:"5px 8px"}}>
  //           {props.name} - {props.age} 살
  //         </div>
  //       )}
  //     </MapMarker>
  //   )
  // }
  
  return(
    <div className="map">
      <Map // 지도를 표시할 Container
        center={state.center}
        style={{
          // 지도의 크기
          width: "100%",
          height: "800px",
        }}
        level={3} // 지도의 확대 레벨
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
              {state.errMsg ? state.errMsg : `여기는 현재 위치`}
            </div>
          </MapMarker>

        )}
        <MapTypeControl position={"TOPRIGHT"} />
        <ZoomControl position={"RIGHT"} />
      </Map>
    </div>
  )
}
export default MapKaKao;
            //  <Marker 
//   key={volunteer.id}
            //   addr={volunteer.addr}
            //   lat={volunteer.lat}
            //   lng={volunteer.lng}
            //   name={volunteer.name}
            //   age={volunteer.age}
            //  />