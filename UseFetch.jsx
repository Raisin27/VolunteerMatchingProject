import { useEffect, useState } from "react";
// 각 컴포넌트 DayList, WordList 에서 사용되는 fetch() 코드가 중복되어.
//이 부분을 UseFetch() 함수로 선언하고 , 각 컴포넌트에서 사용함
const UseFetch = (url)=>{
    const [data, setData] = useState([]);
    useEffect(()=>{
        console.log('UseFetch() 이용 json 서버로 정보를 가져오기!!');
        fetch(url)
        .then((res)=>{
            return res.json();//res 를 json 형식으로 변환
        })
        .then((res)=>{
            // console.log(res);
            setData(res);
        })
    },[url]);
    return data;
}
export default UseFetch;