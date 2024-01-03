import React from "react";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
const Profile = ({authorized}) =>{
    if(!authorized){
        // return <Redirect to="/main" />;
    }
    return(
        <div>
            if u are here, u allow to be here!!
        </div>
    )
}
export default Profile;