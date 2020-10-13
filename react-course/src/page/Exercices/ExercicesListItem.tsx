import React from 'react';
import {Link} from 'react-router-dom';

type Props = {
    text:string,
    bgPath:string,
    url:string
}

export default function ExercicesListItem(props:Props){
    return (
        <Link to={props.url} className="list-exercices-item shadow-md hover:shadow-xl overflow-hidden relative bg-gray-400 w-64 h-64 m-3 cursor-pointer transition duration-150">
            <img alt="img-exercice" className="list-exercices-item-img h-full w-full absolute top-0 left-0 z-10 opacity-30 transition duration-300" src={props.bgPath}/>
            <div className="list-exercices-item-text transition duration-300 opacity-100 flex h-full">
                <div className="m-auto z-50 text-xl font-bold relative">{props.text}</div>
            </div>
        </Link>
    );
}