import React, {useState} from 'react';
import {useUsers} from "./myCustomHooks";
import {Users} from './components'
import {usePostsById} from "./myCustomHooks/usePostsById";
import Post from "./components/Post/Post";
import {UsersContextHok} from "./Hok/UsersContext";
import Posts from "./components/Posts/Posts";
const App = () => {
    const [users,setUsers] = useUsers()
    const { posts,setPostId } = usePostsById()
    return (
        <div>
            <UsersContextHok props={{ users, setPostId, posts }}>
                <Users/>
                <hr/>
                <Posts/>
            </UsersContextHok>

        </div>
    );
};

export { App };
