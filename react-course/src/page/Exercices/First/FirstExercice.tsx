import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Loader from "../../../component/Loader/Loader";
import {User, UserGender} from "../../../types/APITypes";

const initialGenderFilterState:Array<UserGender> = ['male','female'];

export default function FirstExercice(){
    const [loading, setLoading] = useState<boolean>(true);
    const [users, setUsers] = useState<Array<User>>([]);
    const [usersDisplayed, setUsersDisplayed] = useState<Array<User>>([]);
    const [filterGenders, setFilterGenders] = useState<Array<UserGender>>(initialGenderFilterState);
    const [error, setError] = useState<string|null>(null);

    useEffect(() => {
       axios.get("https://randomuser.me/api/?results=20",{
            headers: {"Access-Control-Allow-Origin" : "*"}
        }).then(({data}) => {
            //console.log(data.results);
            setUsers(data.results);
            setUsersDisplayed(data.results);
        }).catch(error => {
            setError("Une erreur est survenue : " + error.message);
        }).finally(() => {
            setLoading(false);
        });
    },[])

    useEffect(filterByGender,[filterGenders])

    function filterUsers(value:string){
        const newUsersDisplayed:Array<User> = [];
        users.forEach((user:User) =>{
            if(user.name.first.includes(value) || user.name.last.includes(value) || user.email.includes(value)){
                newUsersDisplayed.push(user);
            }
        });
        setUsersDisplayed(newUsersDisplayed);
        setFilterGenders(initialGenderFilterState);
    }

    function toggleFilter(gender:UserGender){
        let newFilterGenders = filterGenders;
        if(!filterGenders.includes(gender)){
            newFilterGenders.push(gender);
        }else{
            newFilterGenders = filterGenders.filter((gen) => {
                return gen !== gender;
            });
        }
        setFilterGenders(newFilterGenders);
        filterByGender();
    }

    function filterByGender(){
        let usersToDisplay:Array<User> = [];
        if(filterGenders.length > 0){
            usersToDisplay = users.filter(user => {
                return filterGenders.includes(user.gender);
            });
        }
        setUsersDisplayed(usersToDisplay);
    }

    return (
        <div className="flex flex-col h-full">
            <div className="flex mb-3">
                <div className="w-1/2 flex mx-4">
                    <input className="border my-auto w-full flex outline-none p-2 focus:border-gray-400" placeholder="Search..." type="text" onChange={(e) => filterUsers(e.currentTarget.value)} />
                </div>
                <div className="flex mx-4">
                    <label className="my-auto" htmlFor="filter-male">Homme</label>
                    <input id="filter-male" className="mx-2" type="checkbox" checked={filterGenders.includes('male')} onChange={(e) => toggleFilter('male')}/>
                </div>
                <div className='flex mx-4'>
                    <label className="my-auto" htmlFor="filter-female">Femme</label>
                    <input id="filter-female" className="mx-2 p-1" type="checkbox" checked={filterGenders.includes('female')} onChange={(e) => toggleFilter('female')}/>
                </div>
            </div>
            {loading ? (
                <Loader/>
            ) : (
                <div>
                    {error !== null ? (
                        <div className="text-center">
                            {error}
                        </div>
                    ) : (
                        <table className="w-full">
                            <thead>
                            <tr>
                                <th/>
                                <th>Nom</th>
                                <th>Email</th>
                            </tr>
                            </thead>
                            <tbody>
                            {usersDisplayed.length === 0 && <tr><td/><td>Pas de données</td><td/></tr>}
                            {usersDisplayed.map((user:User, index) => {
                                return (
                                    <tr className="border-b border-b-1 border-gray-200 text-center hover:bg-opacity-40 hover:bg-gray-300" key={index}>
                                        <td className="p-2"><img className="rounded-full" alt={user.email} src={user.picture.thumbnail}/></td>
                                        <td>{user.name.last} {user.name.first}</td>
                                        <td>{user.email}</td>
                                    </tr>
                                );
                            })}
                            </tbody>
                        </table>
                    )}
                </div>
            )}
        </div>
    );
}