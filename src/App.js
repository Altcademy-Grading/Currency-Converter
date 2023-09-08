import React from 'react';

import Navbar from "./Navbar";
import List from "./pages/List";
import Converter from "./pages/Converter";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/converter" component={Converter}/>
          <Route path="/list" component={List}/>          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
