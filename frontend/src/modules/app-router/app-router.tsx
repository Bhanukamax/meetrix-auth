import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../home/home";

export default function AppRouter() {
  return (
    <Router>
      <div>
        <Route exact path="/">
          <Home />
        </Route>
      </div>
    </Router>
  );
}
