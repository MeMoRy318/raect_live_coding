import React, {useEffect, useState} from 'react';
import {RequestServer} from "../../services";
import {usePosts} from "../../myCastomsHooks";


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


    return (

        <div>
            {JSON.stringify(posts)}
        </div>
        // <ul>
        //
        //     {!!posts?.length && [...posts].map(item => {
        //         const  {id, title} = item
        //         return (
        //             <li key={id}>
        //                 ID: {id}, Title: {title}
        //             </li>
        //         )
        //     })}
        // </ul>
    );
};

