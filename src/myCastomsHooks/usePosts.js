import {useEffect, useState} from "react";
import {postsService} from "../services";

export const usePosts = () => {
    const [posts,setPosts] = useState([]);
    const [error,setError] = useState('');

    useEffect(()=> {
        try {
            postsService.getAllPosts().then(({data}) => setPosts(data))
        }catch (e) {
            setError(e.messages)
        }
    },[])

    return [posts,setPosts,error]
}
