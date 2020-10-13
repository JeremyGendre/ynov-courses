import React from 'react';

type Props = {
    callback(value:any):void,
    value?:string
};

export default function SearchInput(props:Props){
    let element = <input className="border my-auto w-full flex outline-none p-2 focus:border-gray-400" placeholder="Search..." type="text" onChange={(e) => props.callback(e.currentTarget.value)} />;
    if(props.value !== undefined){
        element = <input className="border my-auto w-full flex outline-none p-2 focus:border-gray-400" placeholder="Search..." value={props.value} type="text" onChange={(e) => props.callback(e.currentTarget.value)} />;
    }
    return (
        <>
            {element}
        </>
    );
}