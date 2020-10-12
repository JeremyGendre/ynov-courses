import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Loader from "../../../component/Loader/Loader";

type User = {
    picture:{thumbnail:string},
    email:string,
    name:{last:string, first:string}
};

export default function FirstExercice(){
    const [loading, setLoading] = useState<boolean>(true);
    const [users, setUsers] = useState<Array<User>>([]);
    const [usersDisplayed, setUsersDisplayed] = useState<Array<User>>([]);

    useEffect(() => {
        axios.get("https://randomuser.me/api/?results=20",{
            headers: {"Access-Control-Allow-Origin" : "*"}
        }).then(({data}) => {
            setUsers(data.results);
            setUsersDisplayed(data.results);
        }).finally(() => {
            setLoading(false);
        });
    },[])

    function filterUsers(value:string){
        const newUsersDisplayed:Array<User> = [];
        users.forEach((user:User) =>{
            if(user.name.first.includes(value) || user.name.last.includes(value) || user.email.includes(value)){
                newUsersDisplayed.push(user);
            }
        });
        setUsersDisplayed(newUsersDisplayed);
    }

    return (
        <div className="flex flex-col h-full">
            <input className="border outline-none p-2 w-full mb-2 focus:border-gray-400" placeholder="Search..." type="text" onChange={(e) => filterUsers(e.currentTarget.value)} />
            {loading ? (
                <Loader/>
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
    );
}