import React from 'react';
import './App.output.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import HomePage from "./page/HomePage/HomePage";
import ErrorPage from "./page/ErrorPage/ErrorPage";
import Sidebar from "./component/Sidebar/Sidebar";
import FirstExercice from "./page/Exercices/First/FirstExercice";
import ProfilePage from "./page/Profile/ProfilePage";
import Exercices from "./page/Exercices/Exercices";
import SecondExercice from "./page/Exercices/Second/SecondExercice";

function App() {
    return (
        <div className="text-lg min-h-screen flex flex-row max-h-screen">
            <BrowserRouter>
                <Sidebar/>
                <div id="page-content" className="flex-1 overflow-auto px-8 py-4">
                    <Switch>
                        <Route exact path="/"><HomePage/></Route>
                        <Route exact path="/profile"><ProfilePage/></Route>
                        <Route exact path="/exercices"><Exercices/></Route>
                        <Route exact path="/exercice/1"><FirstExercice/></Route>
                        <Route exact path="/exercice/2"><SecondExercice/></Route>
                        <Route><ErrorPage code={404} message={"Not Found"}/></Route>
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
