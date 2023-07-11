import React, {useContext} from 'react';
import {User} from '../User/User'
import {UsersContext} from "../../Hok/UsersContext";
const Users = () => {
    const { users } = useContext(UsersContext)
    return (
        <ul>
            {
                !!users?.length && [...users].map(item => <User user={item} key={item.id}/>)
            }
        </ul>
    );
};

export { Users };
