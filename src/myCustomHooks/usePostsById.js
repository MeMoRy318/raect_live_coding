import {useEffect, useState} from "react";
import {postService} from "../services";

const usePostsById = ( id = 0) => {

    const [postId, setPostId] = useState(id);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        if (postId){
            postService.getPostsByUserId(postId).then(({data}) => setPosts(data))
        }
    }, [postId]);

    return {
        postId, setPostId, posts
    }
}


export { usePostsById };
