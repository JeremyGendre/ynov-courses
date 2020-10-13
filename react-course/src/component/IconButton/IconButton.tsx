import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

type Props = {
    callback():void,
    icon:any,
    widthClass?:string,
    heightClass?:string,
    disabled?:boolean
};

export default function IconButton(props:Props){

    function getIconButtonClasses():string{
        let classes = 'cursor-pointer flex mx-2 border rounded-full transition duration-100 ' + (props.heightClass ?? 'h-8') +" "+ (props.widthClass ?? 'w-8');
        if(props.disabled === true){
            return classes + " opacity-50 bg-gray-500";
        }
        return classes + " hover:bg-blue-200 active:transform active:scale-90";
    }

    return (
        <div className={getIconButtonClasses()} onClick={() => props.disabled ? null : props.callback()}>
            <FontAwesomeIcon icon={props.icon} className="m-auto"/>
        </div>
    );
}