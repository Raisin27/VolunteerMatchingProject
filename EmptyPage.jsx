import { Link } from 'react-router-dom';
const EmptyPage = () =>{
    return(
        <div>
            <h2> 잘못된 접근 입니다 !!</h2>
            <Link to={"/"}>메인으로 돌아가기</Link>
        </div>
    )
}
export default EmptyPage;