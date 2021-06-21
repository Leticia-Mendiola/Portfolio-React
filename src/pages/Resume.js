import React from "react";
import pdf from "../download.pdf";

function Resume() {
    return (
    <div>
        <div style={{marginTop: "20px", marginRight: "5px", marginLeft: "5px"}}>
        <iframe title="Leticia Mendiola's Resume" style={{width:"100%", height:"1000px", border:"2px solid"}} src={"https://docs.google.com/document/d/e/2PACX-1vTSHICmYJlKDhgmdi06I16v_hksIzIJNUITC8LrtxSLfeVPPD8UR_4JY9KKI-KkhHBx_IuiWg49M5aQ/pub?embedded=true"}></iframe>
        </div>
        <div className="row align-items-center" style={{marginTop:"20px"}}>
        <a href={pdf} download className="btn-large" style={{marginBottom:"25px"}}>Download Resume</a>
        </div>
    </div>
    );
}

export default Resume;