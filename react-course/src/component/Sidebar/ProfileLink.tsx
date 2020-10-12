import React from 'react';
import {Link} from "react-router-dom";

export default function ProfileLink(props:any){
    return (
        <Link to="/profile" className="flex rounded transition duration-100 p-1 hover:bg-opacity-40 hover:bg-gray-200">
            <div className="max-w-2 hover:opacity-50">
                <img className="rounded-full" src={process.env.PUBLIC_URL + "/logo512.png"} alt="avatar"/>
            </div>
            <div className="my-auto mx-4">Mon compte</div>
        </Link>
    );
}