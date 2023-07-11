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

const usePostsByIdArtem = ( id = 0) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        if (id){
            postService.getPostsByUserId(id).then(({data}) => setPosts(data))
        }
    }, [id]);

    return {
         posts,setPosts
    }
}


export { usePostsById, usePostsByIdArtem };
