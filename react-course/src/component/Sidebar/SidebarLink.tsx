import React, {PropsWithChildren} from 'react';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

type Props = {
    icon:any,
    text:string,
    path:string
};

export default function SidebarLink(props:PropsWithChildren<Props>){
    return (
        <Link to={props.path} className="flex justify-center md:justify-start w-full rounded transition duration-100 px-2 py-1 hover:bg-opacity-40 hover:bg-gray-200">
            <div className="flex md:m-none w-6 h-6">
                <FontAwesomeIcon className="m-auto" icon={props.icon}/>
            </div>
            <div className="hidden my-auto mx-4 md:inline-block">{props.text}</div>
        </Link>
    );
}