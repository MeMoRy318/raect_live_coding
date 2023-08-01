import React from 'react';

const Comment = ({comment}) => {
    const {postId, id, email, name, body} = comment
    return (
        <li>
            <h2>ID: {id}, title: {name}</h2>
            <p>{body}</p>
            <div><span>postId: {postId}</span><span>{email}</span></div>
        </li>
    );
};

export {Comment};
