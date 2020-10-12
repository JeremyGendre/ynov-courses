import React from 'react';
import ProfileLink from "./ProfileLink";

export default function Sidebar(props:any){
    return (
        <div className="w-64 bg-blue-400 flex-col flex flex-shrink-0 px-3 py-2">
            <ProfileLink/>
        </div>
    );
}