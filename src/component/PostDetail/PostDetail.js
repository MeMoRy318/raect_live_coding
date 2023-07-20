import React from 'react';

const PostDetail = ({post}) => {

    const {body,title,id} = post;

    return (
        <ul>
            <li>ID: {id}</li>
            <li>Title: {title}</li>
            <li>BODY: {body}</li>
        </ul>
    );
};

export {PostDetail};
