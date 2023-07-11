import React from 'react';

const Post = ({post}) => {

    const { userId, id, title, body } = post;

    return (
        <ul>
            <p>User Posts <strong>ID:{userId}</strong></p>
           <li><strong>ID:</strong>{id}</li>
           <li><strong>TITLE:</strong>{title}</li>
           <li><strong>BODY</strong>{body}</li>
        </ul>
    );
};

export default Post;
