import React from "react";

function Project(props) {
    return(
        <div className="card">
        <div className="img-container" style={{backgroundImage: `url(${props.image})`}}>
          {/* <img alt={props.name} /> */}
        </div>
        <div className="content">
          <ul>
            <li>
              <strong>Name:</strong> {props.name}
            </li>
            <li>
            <strong>Application:</strong><a href={props.dlink}>{props.dlink}</a>
            </li>
            <li>
            <strong>Git Hub:</strong><a href={props.glink}>{props.glink}</a>
            </li>
          </ul>
        </div>
      </div>
    );
}

export default Project;