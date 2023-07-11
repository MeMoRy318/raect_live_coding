import React, {useState} from 'react';
import {useUsers} from "./myCustomHooks";
import {Users} from './components'
import {usePostsById} from "./myCustomHooks/usePostsById";
import Post from "./components/Post/Post";
const App = () => {
    const [users,setUsers] = useUsers()
    const { posts,setPostId } = usePostsById()
    return (
        <div>
            <Users users={users} setPostId={setPostId}/>
            <hr/>
            {!!posts?.length && [...posts].map(value => <Post post={value} key={value.id}/>)}
        </div>
    );
};

export { App };
