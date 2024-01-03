import axios from "axios";
import { useState } from "react";
// const API_STATUS_URL = `https://apis.data.go.kr/1741000/VolunteerParticipation/getVolunteerParticipation?ServiceKey=Tb6v%2B1IRvKdFeie1ahQAYlTsX8WTdV8ug%2B4ZRIzVFAFO5goqgabRr3ihVlHjjO9IAbv2noI7VYDsvpAD0lyFtQ%3D%3D`;

const Status = () =>{
    // const API_KEY = `Tb6v%2B1IRvKdFeie1ahQAYlTsX8WTdV8ug%2B4ZRIzVFAFO5goqgabRr3ihVlHjjO9IAbv2noI7VYDsvpAD0lyFtQ%3D%3D`;
    const [year, setYear] = useState("");
    const [statusYear, setStatusYear] = useState("");
    const [volAdult, setVolAdult] = useState("");
    const [rt, setRt] = useState("");
    const [result, setResult] = useState({});
    // const url = `https://apis.data.go.kr/1741000/VolunteerParticipation/getVolunteerParticipation?wrttimeid=${year}&ServiceKey=${API_KEY}`;
    const url = `http://localhost:5000/status/api`;
    
    
    // const searchStatus = async(e)=>{
        // const convert = require("xml-js");    
        // if(e.key === "Enter"){
            axios
            .get(url,{} )
            .then(function(res){
                console.log(res.data.elements[0].elements);
                const data = res.data.elements[0].elements;
                // console.log(data[13].elements[0].elements[0].text);
                const year = data[13].elements[0].elements[0].text;
                const volunteer_adult_popl = data[13].elements[3].elements[0].text;
                const participation_rt = data[13].elements[4].elements[0].text;
                // console.log(volunteer_adult_popl);
                // console.log(participation_rt);
                // setResult(data);
                setStatusYear(year);
                setVolAdult(volunteer_adult_popl);
                setRt(participation_rt);
                // console.log(res.data.elements[0].elements[i].elements);
                // console.log(res.headers);
                // const data = JSON.parse(
                //     convert.xml2json(res.data, { compact: true, spaces: 2 })
                //     );
                // // const data = JSON.parse(res.data);
                // console.log(data.row[1]);
            })
            .catch(function(err){
                console.log(err);
            });
    
    // }
        
    // }

    return(
        <div>
            <h2 className="status-title">봉사 참여 현황</h2>
            <h5 >총 성인 인구수 자원봉사참여 수(실인원, 20세 이상)</h5>
            
            <div className="status-body">
                <div className="status-container">
                    <div className="status-circle">
                        <div className="status-header">
                            <span className="status">{statusYear}</span> 년
                        </div>
                    </div>
                    <div className="status-circle warning">
                        <div className="status-header">
                            성인 봉사자 참여 수 <span className="status">{volAdult}</span> 명
                        </div>
                    </div>
                    <div className="status-circle success">
                        <div className="status-header">
                            참여율 <span className="status">{rt}</span> %
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Status;