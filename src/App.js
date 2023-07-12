import React, {useState} from 'react';
import {useUsers} from "./myCustomHooks";
import {Users} from './components'
import {UsersContextHok} from "./Hok/UsersContext";
import Posts from "./components/Posts/Posts";
const App = () => {
    const [users,setUsers] = useUsers()

    return (
        <div>
            <UsersContextHok >
                <Users users={users}/>
                <hr/>
                <Posts/>
            </UsersContextHok>

        </div>
    );
};

export { App };
