import React, {useEffect, useState} from 'react';
import axios from 'axios';

type User = {
    picture:{thumbnail:string},
    email:string,
    name:{last:string, first:string}
};

export default function FirstExercice(props:any){
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get("https://randomuser.me/api/?results=20",{
            headers: {"Access-Control-Allow-Origin" : "*"}
        }).then(({data}) => {
            console.log(data.results);
            setUsers(data.results);
        });
    },[])

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Nom</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                {users.map((user:User, index) => {
                    return (
                        <tr>
                            <td><img src={user.picture.thumbnail}/></td>
                            <td>{user.name.last} {user.name.first}</td>
                            <td>{user.email}</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    );
}