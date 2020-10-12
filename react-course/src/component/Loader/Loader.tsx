import React from 'react';

export default function Loader(props:{size?:number}){
    return (
        <div className="w-full flex h-full">
            <div className="animate-spin m-auto loader" style={props.size ? {width:props.size+'px'} : {}}/>
        </div>
    );
}