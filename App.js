import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Educational from "./components/educational/educational";
import Experience from "./components/experience/experience";
import Extras from "./components/extras/extras";
import Personal from "./components/personal/personal";
import Projects from "./components/projects/projects";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <div>
          <link to="/"></link>
        </div>
        <Route exact path="/" component={Personal}></Route>
        <Route path="/page2" component={Educational}></Route>
        <Route path="/page3" component={Projects}></Route>
        <Route path="/page4" component={Experience}></Route>
        <Route path="/page5" component={Extras}></Route>
      </Router>
    </div>
  );
}

export default App;
