import { MapMarker } from "react-kakao-maps-sdk";

import { useState, useEffect } from "react";

const Marker=(props)=>{
  const [isVisible, setIsVisible] = useState(false);

    return(
        <>
        <MapMarker 
              key={props.id}
              title={props.addr}
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
              onMouseOver={(id) => setIsVisible(true)}
              onMouseOut={(id) => setIsVisible(false)}
              onClick={(e) =>console.log(e)}
              >

          </MapMarker>
          
        </>
    )
}
export default Marker;
              
            {/* <div style={{ padding: "5px", color: "#000" }}>
              {props.name} ${props.age} 살
            </div> */}