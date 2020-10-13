import React from 'react';
import ExercicesListItem from "./ExercicesListItem";

export default function Exercices(){
    return (
        <div className="flex h-full">
            <ExercicesListItem text={"Exercice 1"} url={'/exercice/1'} bgPath={process.env.PUBLIC_URL+ '/logo512.png'}/>
            <ExercicesListItem text={"Exercice 2"} url={'/exercice/2'} bgPath={process.env.PUBLIC_URL+ '/logo192.png'}/>
            <ExercicesListItem text={"Exercice 3"} url={'/exercice/3'} bgPath={process.env.PUBLIC_URL+ '/logo192.png'}/>
        </div>
    );
}