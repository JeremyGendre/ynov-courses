import React from 'react';
import {faFileExcel, faHome} from "@fortawesome/free-solid-svg-icons";
import SidebarLink from "./SidebarLink";

export default function SidebarLinks(props:any){
    return (
        <div className="w-full mt-6">
            <SidebarLink icon={faHome} text={'Accueil'} path={'/'}/>
            <SidebarLink icon={faFileExcel} text={'Exercice 1'} path={'/exercice/1'}/>
        </div>
    );
}