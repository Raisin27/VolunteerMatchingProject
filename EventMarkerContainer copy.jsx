import { useState, useEffect } from "react";
import { useMap, Map, MapTypeControl, ZoomControl, MapMarker } from "react-kakao-maps-sdk" ;
const EventMarkerContainer = (props) =>{
    // const map = useMap();
    const [isVisible, setIsVisible] = useState(false);
    const [selected_id, setSelect_id] = useState(0);

    const map = new kakao.maps.Map(mapContainer, mapOption);
    let marker = new kakao.maps.Marker({
      position: position,
      clickable: true // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
    });

    marker.setMap(map);
    return(
      <MapMarker
              key={props.id}
              title={props.id}
              position={{
                lat: parseFloat(`${props.lat}`), 
                lng: parseFloat(`${props.lng}`)
              }}
              image={{
                src: `${props.image}`, // 마커이미지의 주소입니다
                size: {
                  width: 50,
                  height: 65,
                }, // 마커이미지의 크기입니다
                options: {
                  offset: {
                    x: 27,
                    y: 69,
                  }
                }
              }}
              clickable={true}
              onMouseOver={() => setIsVisible(true)}
              onMouseOut={() => setIsVisible(false)}
              onClick={(e) => {
                // setSelected_id(selected_id = props.id);
                // console.log(typeof(e.f.Rb.Ti));
                // e.preventDefault();
                // props.onChangePage(props.id);
                console.log(e);
              }}
      >
        {isVisible && (
          <div key={props.id} style={{ padding: "5px", color: "#000", margin:"5px 8px"}}>
            {props.name} - {props.age} 살
          </div>
        )}
      </MapMarker>
    )
  }

  export default EventMarkerContainer;