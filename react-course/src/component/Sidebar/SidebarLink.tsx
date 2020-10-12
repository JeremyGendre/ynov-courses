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
        <Link to={props.path} className="flex w-full rounded transition duration-100 px-2 py-1 hover:bg-opacity-40 hover:bg-gray-200">
            <FontAwesomeIcon className="my-auto" icon={props.icon}/>
            <div className="my-auto mx-4">{props.text}</div>
        </Link>
    );
}