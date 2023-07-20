import React from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useFetching} from "../../myCustomHook/useFeching";
import {postsService} from "../../services/postsService";
import {PostDetail} from "../../component/PostDetail/PostDetail";

const PostDetailsPage = () => {
    let navigate = useNavigate();
    const {postId} = useParams()
    const {response,error} = useFetching(postsService.getPostsId(postId),+postId)

    console.log(response)

    return (
        <div>
            {!! error ? navigate('/*') :  !!response && <PostDetail post={response}/> }
        </div>
    );
};

export {PostDetailsPage};
