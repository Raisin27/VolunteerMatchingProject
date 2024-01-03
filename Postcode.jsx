import React from 'react';
import DaumPostcode from "react-daum-postcode";

const Postcode = (props) => {

  const complete = (data) => {
    let fullAddress = data.address;//도로명 주소 변수
    let extraAddress = '';//참고 항목 변수

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }
    console.log(data);
    console.log(data.zonecode);
    console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
    
    props.setUser({
      ...props.user,
      address:fullAddress,
    })
  };
  return (
    <>
    <DaumPostcode 
      className='postmodal'
      autoClose
      onComplete={complete}/>
    </>
  );
};
export default Postcode;