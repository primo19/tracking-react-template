import React from "react";
import "./App.css";
import Store from "./core/utils/Store";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import 'typeface-abel';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

import Index from "./pages/index";
import Login from "./pages/admin-login/login";

const App = () => {
  return (
    <Store>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/admin-login" component={Login} />
        </Switch>
      </BrowserRouter>
    </Store>
  );
};

export default App;
