import React from 'react';

const Todos = ({todos}) => {

    const {id,title,completed} = todos;

    return (
        <ul>
            <li>ID: {id}</li>
            <li>TITLE: {title}</li>
            <li>COMPLETED: {completed}</li>
        </ul>
    );
};

export {Todos};
