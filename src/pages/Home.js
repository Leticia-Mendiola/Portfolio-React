import React from "react";
import HomeHeader from "../components/HomeHeader";
import Wrapper from "../components/Wrapper";
import Project from "../components/Project";
import projects from "../projects.json";

function Home() {
    return (
        <Wrapper>
        <HomeHeader />,
        { projects.map(projects => (
            <Project
            name={projects.name}
            image={projects.image}
            dlink={projects.dlink}
            glink={projects.glink}
            />))
          }
        </Wrapper>
    );
}

export default Home;