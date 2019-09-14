import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavbarTop from "./components/layout/NavbarTop";
import NavbarSide from "./components/layout/NavbarSide";
import Home from "./components/pages/Home";
import History from "./components/pages/History";
import About from "./components/pages/About";
import "./App.scss";

function App() {
  return (
    <Router>
      <div className='container'>
        <NavbarTop />
        <div className='sidebar-layout'>
          <NavbarSide />
          <div className='main'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/history' component={History} />
              <Route exact path='/about' component={About} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
