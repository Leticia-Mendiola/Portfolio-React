import React from "react";
import pic from "../ProfilePic.jpg";

function Profiles() {
    return (
    <div>
        <div style={{marginTop: "70px"}} className="container row z-depth-5"v>
            <img className="col-4 img-fluid rounded-circle" alt="profile pic" src={pic}/> 
            <div className="col-8 card-content valign-wrapper center-align">
            <div>
                <h4 className="white-text">Git Hub Profile</h4>
            </div>
            <div>
                <a href="https://github.com/Leticia-Mendiola">https://github.com/Leticia-Mendiola</a>
            </div>
            </div>
        </div>
        <div style={{marginTop: "70px"}} className="container row z-depth-5">
            <img className="col-4 img-fluid rounded-circle" alt="profile pic" src={pic}/> 
            <div className="col-8 card-content valign-wrapper center-align">
            <div>
                <h4 className="white-text">LinkedIn Profile</h4>
            </div>
            <div>
                <a href="https://www.linkedin.com/in/leticia-mendiola-598a7183/">https://www.linkedin.com/in/leticia-mendiola-598a7183/</a>
            </div>
            </div>
        </div>
    </div>
    );
}

export default Profiles;