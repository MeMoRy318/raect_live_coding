import React, {useRef} from 'react';
import {PostForm} from "../../components/PostForm/PostForm";
import {postService} from "../../services/postService";

const PagePostForm = () => {

    const titleRef = useRef()
    const bodyRef = useRef()
    const userIdRef = useRef()

    const handelSubmitPost = async (e) => {

        e.preventDefault()

        const response = await postService.createPost({
            title:titleRef?.current?.value,
            body:bodyRef?.current?.value,
            userId:userIdRef?.current?.value,
        })
        console.log(response)
    };

    return (
        <div>
            <PostForm handelSubmitPost={handelSubmitPost} titleRef={titleRef} bodyRef={bodyRef} userIdRef={bodyRef}/>
        </div>
    );
};

export {PagePostForm};
