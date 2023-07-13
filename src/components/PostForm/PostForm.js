import React, {useRef} from 'react';
import {postService} from "../../services/postService";

const PostForm = ({handelSubmitPost,titleRef,bodyRef,userIdRef} ) => {

    return (
        <form onSubmit={handelSubmitPost}>
            <label>
                Title
                <input type="text" name="title" ref={titleRef}/>
            </label>
            <br/>
            <label>
                Body
                <input type="text" name="body" ref={bodyRef}/>
            </label>
            <br/>
            <label>
                userId
                <input type="number" name="userId" ref={userIdRef}/>
            </label>
            <button type="submit">send</button>
        </form>
    );
};

export {PostForm};
