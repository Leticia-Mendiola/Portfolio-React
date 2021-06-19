import React from "react";
import pic from "../ProfilePic.jpg";

function HomeHeader() {
    return (
        <div style={{marginTop: "70px"}} className="container row z-depth-5">
            <img className="col s4 responsive-img circle" alt="profile pic" src={pic}/> 
            <div className="col s8 card-content">
                <h4 className="right-align">Contact Information</h4>
                <br></br>
                <h6 className="right-align">Phone:</h6>
                <br></br>
                <h6 className="right-align">210-608-5800</h6>
                <br></br>
                <h6 className="right-align">Email:</h6>
                <h6 className="right-align">lmendiola509@gmail.com</h6>
            </div>
        </div>
    );
}

export default HomeHeader