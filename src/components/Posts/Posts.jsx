import React, {useEffect, useState} from 'react';
import {RequestServer} from "../../services";
import {usePosts} from "../../myCastomsHooks";
import {Post} from "../Post/Post";


const requestServer = new RequestServer();
export const Posts =  () => {

    // console.log(requestServer)
    // const [posts, setPosts] = useState([])
    //
    // useEffect(() => {
    //     (async() => {
    //         const {data} = await requestServer.getPosts();
    //         console.log(data);
    //         setPosts(data)
    //     })()
    // }, [])


    const [posts,setPosts, error] = usePosts()
    // const [posts,setPosts, error] = usePosts()



    return (
        <ul>
            {!!posts.length && [...posts].map(item => <Post post={item} key={item.id}/>)}
        </ul>
    );
};

