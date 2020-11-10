import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// components
import Signin from "../containers/Signin/Signin";
import Home from "../containers/Home/Home";

// empty component
// const EmptyComp = () => {
//   return (
//     <div className="text-center mt-5">WIP</div>
//   )
// };

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Signin} />
        <Route exact path="/app/home" component={Home} />
      </Switch>
    </Router>
  );
};

export default Root;
