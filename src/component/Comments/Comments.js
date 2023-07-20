import React from 'react';
import { useNavigate } from "react-router-dom";

const Comments = ({comment}) => {

    const {postId, id, email, name, body} = comment;
    const navigate = useNavigate();

    return (
        <div>
            <div>id: {id}, title: {name}</div>
            <div>Comment: {body}</div>
            <div>
                <div>Email: {email}</div>
            </div>
            <div>
                <button
                    onClick={() => navigate(`posts/${postId}`)}
                >
                    get post
                </button>
            </div>
        </div>
    );
};

export {Comments};
