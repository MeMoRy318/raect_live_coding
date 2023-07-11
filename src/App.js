import React from 'react';
import {useUsers} from "./myCustomHooks";
import {Users} from './components'
const App = () => {
    const [users,setUsers] = useUsers()

    return (
        <div>
            <Users users={users}/>
        </div>
    );
};

export { App };
