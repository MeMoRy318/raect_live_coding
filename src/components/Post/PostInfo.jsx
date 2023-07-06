import React from 'react';

export const PostInfo = (props) => {
    const {id, title, body} = props.postInfo
    return (
        <div>
            <h3>ID: {id}, Title: {title}</h3>
            <p>{body}</p>
        </div>
    );
};

