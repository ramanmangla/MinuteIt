import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavbarTop from "./components/layout/NavbarTop";
import NavbarSide from "./components/layout/NavbarSide";
import "./App.scss";

function App() {
  return (
    <Router>
      <div className='container'>
        <NavbarTop />
        <div className='two-column'>
          <NavbarSide />
          <div className='main'></div>
        </div>
      </div>
    </Router>
  );
}

export default App;
