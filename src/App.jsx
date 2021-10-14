import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Auth from "./pages/Auth/Auth";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Switch>
          <Route exact path="/" component={Auth}></Route>
          <Route path="/home" component={Home}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
