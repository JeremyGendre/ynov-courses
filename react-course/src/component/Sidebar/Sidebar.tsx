import React from 'react';
import ProfileLink from "./ProfileLink";
import SidebarLinks from "./SidebarLinks";

export default function Sidebar(props:any){
    return (
        <div className="w-20 bg-blue-400 flex-col flex flex-shrink-0 px-3 py-2 shadow-dark md:w-64">
            <ProfileLink/>
            <SidebarLinks/>
        </div>
    );
}