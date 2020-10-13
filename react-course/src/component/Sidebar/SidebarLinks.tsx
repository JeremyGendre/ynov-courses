import React from 'react';
import {faCog, faFileExcel, faHome} from "@fortawesome/free-solid-svg-icons";
import SidebarLink from "./SidebarLink";

export default function SidebarLinks(){
    return (
        <div className="w-full mt-6">
            <SidebarLink icon={faHome} text={'Accueil'} path={'/'}/>
            <SidebarLink icon={faCog} text={'Paramètres'} path={'/settings'}/>
            <SidebarLink icon={faFileExcel} text={'Exercices'} path={'/exercices'}/>
        </div>
    );
}