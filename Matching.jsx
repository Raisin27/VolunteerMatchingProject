import { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";

const Matching = (props) =>{
    const [isDisable, setDisable] = useState('false');
    useEffect( ()=>{
        console.log('useEffect() 처리');
    },[isDisable]);
    const matchVol = (id)=>{
        console.log('matchVol()-->');
        console.log('id : ' + id);
        const url = 'http://localhost:3000/process/volMatching';
        const matching_url = 'http://localhost:3000/process/volMatching/:userid';
        fetch(url,{
            method:"POST",
            headers: {
                "Content-type":"application/json",
            },
            body: JSON.stringify({
                id:id,
                // isMatched:!isMatched
            }),
        })
        // .then(
        //     fetch(matching_url, {
        //         method: "POST",
        //         headers: {
        //             "Content-type":"application/json",
        //         },
        //         body: JSON.stringify({
        //             id:id,
        //         }),

        //     }
        // ))
        .then(res=>{
                if(res.ok){
                    // setDisable(!isDisable);
                    alert("매칭이 완료되었습니다");
                    // setIsMatched(!isMatched);
                }
        });
            window.location.reload();
    }

    return(
        <div>
            <Button onClick={(e)=>{
                matchVol(props.id);
                // setDisable(!isDisable);
                // this.style.backGroundColor="red";
                // this.innerHTML="매칭됨";
            }}
                    variant="primary"
                    // disabled={isDisable}
                    size="sm">매칭</Button>
        </div>
    )
}
export default Matching;