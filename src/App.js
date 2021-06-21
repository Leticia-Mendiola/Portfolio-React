import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Profiles from "./pages/Profiles"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import './App.css';

function App() {
  return (
    <Router>
    <div>
      <Header />
      <Wrapper>
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio-react" component={Home} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Resume" component={Resume} />
        <Route exact path="/Profiles" component={Profiles} />
      </Wrapper>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
