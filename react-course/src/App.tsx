import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import HomePage from "./page/HomePage/HomePage";
import ErrorPage from "./page/ErrorPage/ErrorPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Switch>
              <Route exact path="/">
                  <HomePage/>
              </Route>
              <Route>
                  <ErrorPage code={404} message={"Not Found"}/>
              </Route>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
