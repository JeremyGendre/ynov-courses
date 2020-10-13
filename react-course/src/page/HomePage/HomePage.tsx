import React from 'react';
import {Link} from 'react-router-dom';
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function HomePage(props:any){
    return (
        <div className="text-center flex flex-col h-full">
            <div className="text-3xl">Projet regroupant les exercices des séances de React :)</div>
            <div className="w-full flex h-full">
                <Link to="/exercices" className="m-auto text-blue-600 hover:underline">
                    Voir les exercices <FontAwesomeIcon icon={faArrowRight}/>
                </Link>
            </div>
        </div>
    );
}