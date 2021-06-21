import React from "react";

function Profiles() {
    return (
    <div>
        <div style="margin-top: 70px;" class="container row z-depth-5">
            <img class="col s4 responsive-img circle" alt="profile pic" src="Assets/profile pic.jpg"> 
            <div class="col s8 card-content valign-wrapper center-align">
            <div>
                <h4 class="white-text">Git Hub Profile</h2>
            </div>
            <div>
                <a href="https://github.com/Leticia-Mendiola">https://github.com/Leticia-Mendiola</a>
            </div>
            </div>
        </div>
        <div style="margin-top: 70px;" class="container row z-depth-5">
            <img class="col s4 responsive-img circle" alt="profile pic" src="Assets/profile pic.jpg"> 
            <div class="col s8 card-content valign-wrapper center-align">
            <div>
                <h4 class="white-text">LinkedIn Profile</h2>
            </div>
            <div>
                <a href="https://www.linkedin.com/in/leticia-mendiola-598a7183/">https://www.linkedin.com/in/leticia-mendiola-598a7183/</h4>
            </div>
            </div>
        </div>
    </div>
    );
}

export default Profiles;