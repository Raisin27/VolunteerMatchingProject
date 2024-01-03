import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
const ModeChange = ()=>{
    return(
        <Container fluid>
            <Image src="./images/picture1.jpg" className="previous" alt="Cinque Terre" width="100%" height="100%"/> 
            <div className="modes">
                <Link to={"/disables"}  className="disabls btn btn-danger">
                    장애인
                </Link>
                <Link to={"/volunteers"}  className="volunt btn btn-primary">
                    봉사자
                </Link>
            </div>
        </Container>
        
    )
}
export default ModeChange;
