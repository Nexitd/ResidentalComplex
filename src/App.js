import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import NewConstructions from "./containers/NewConstuctions/";
import FullResidental from "./containers/FullResidental/";
import "antd/dist/antd.css";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Route exact path='/' component={NewConstructions} />
      <Route path='/complex' component={FullResidental} />
    </BrowserRouter>
  );
};

export default App;
