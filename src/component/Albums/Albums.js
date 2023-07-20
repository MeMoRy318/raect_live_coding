import React from 'react';

const Albums = ({album}) => {

    const { id, title } = album;

    return (
        <div>
            <h2>ID:{id} TITLE: {title}</h2>
        </div>
    );
};

export {Albums};
