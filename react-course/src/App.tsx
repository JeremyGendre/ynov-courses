import React from 'react';
import './App.output.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import HomePage from "./page/HomePage/HomePage";
import ErrorPage from "./page/ErrorPage/ErrorPage";
import Sidebar from "./component/Sidebar/Sidebar";

function App() {
    return (
        <div className="text-xl min-h-screen flex flex-row max-h-screen">
            <BrowserRouter>
                <Sidebar/>
                <div id="page-content" className="flex-1 overflow-auto">
                    <Switch>
                        <Route exact path="/">
                            <HomePage/>
                        </Route>
                        <Route>
                            <ErrorPage code={404} message={"Not Found"}/>
                        </Route>
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
