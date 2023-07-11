import React, {useContext} from 'react';
import {UsersContext} from "../../Hok/UsersContext";
import Post from "../Post/Post";

const Posts = () => {

    const { posts } = useContext(UsersContext)

    return (
        <div>
            {!!posts?.length && [...posts].map(value => <Post post={value} key={value.id}/>)}
        </div>
    );
};

export default Posts;
