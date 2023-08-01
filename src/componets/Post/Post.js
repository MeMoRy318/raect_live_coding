import React from 'react';

const Post = ({post,setPostId}) => {
    const { id, title, body } = post
    return (
        <li>
            <h2>Id: {id}, title: {title}</h2>
            <p>{body}</p>
            <button onClick={()=>setPostId(id)}>Show Comments</button>
        </li>
    );
};

export {Post};
