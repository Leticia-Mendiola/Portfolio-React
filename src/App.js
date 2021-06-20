import logo from './logo.svg';
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Profiles from "./pages/Profiles"
import Header from "./components/Header";
import Footer from "./components/Footer";
// import Project from "./components/Project"
import Wrapper from "./components/Wrapper";
import './App.css';

function App() {
  return (
    <Router>
    {/* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */}
    <div>
      <Header />
      <Wrapper>
        <Route exact path="/" component={Home} />
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
