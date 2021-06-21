import React from "react";
import HomeHeader from "../components/HomeHeader";
import Wrapper from "../components/Wrapper";
import Project from "../components/Project";
import projects from "../projects.json";

function Home() {
    return (
        <Wrapper>
        <HomeHeader />,
        <div className="row">
        <div className="col-2"></div>
        <div className="col-8">
        { projects.map(projects => (
            <Project
            name={projects.name}
            image={projects.image}
            dlink={projects.dlink}
            glink={projects.glink}
            />))
          }
        </div>
        <div className="col-2"></div>
        </div>
        </Wrapper>
    );
}

export default Home;