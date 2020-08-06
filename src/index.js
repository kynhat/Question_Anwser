import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Loadvideo from "./Comonents/uploadvideo";
import Document from "./Comonents/document";
import Question from "./Comonents/question";
import Endgame from "./Comonents/endgame";

import * as serviceWorker from "./serviceWorker";
import store from "./Store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import history from "./history";
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter history={history}>
      <Switch>
        <Route exact path="/login" component={App} />
        <Route exact path="/updateloadvideo" component={Loadvideo} />
        <Route exact path="/document" component={Document} />
        <Route exact path="/question" component={Question} />
        <Route exact path="/endgame" component={Endgame} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
