import React from 'react';
import {User} from '../User/User'
const Users = ({users,setPostId}) => {
    return (
        <ul>
            {
                !!users?.length && [...users].map(item => <User user={item} setPostId={setPostId} key={item.id}/>)
            }
        </ul>
    );
};

export { Users };
