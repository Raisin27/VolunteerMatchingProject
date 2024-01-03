import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
const UserLogo = (props) =>{
    const {userid} = useParams();
    return(
        <>
        <div key={props.id}>
            <image src={`${props.image}`}/>
        </div>
        <Link to ={`/volunteer/${userid}`}>
            <span className="text_white">Hello {userid}</span>
        </Link> 
       </>
    )
}
export default UserLogo;