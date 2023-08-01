import React from 'react';

const Post = ({post}) => {
    const { id, title, body } = post
    return (
        <li>
            <h2>Id: {id}, title: {title}</h2>
            <p>{body}</p>
        </li>
    );
};

export {Post};
