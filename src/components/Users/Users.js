import React from 'react';
import {User} from '../User/User'
const Users = ({users}) => {
    return (
        <ul>
            {
                !!users?.length && [...users].map(item => <User user={item} key={item.id}/>)
            }
        </ul>
    );
};

export { Users };
