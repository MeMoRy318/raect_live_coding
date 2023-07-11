import React from 'react';

const UserDetalis = ({userInfo}) => {

    const { id, name, username, email } = userInfo;

    return (
        <div>
            <p>User Info</p>
            <ul>
                <li><strong>ID:</strong> {id}</li>
                <li><strong>NAME:</strong> {name}</li>
                <li><strong>USER NAME:</strong> {username}</li>
                <li><strong>EMAIL:</strong> {email}</li>
            </ul>
        </div>
    );
};

export {UserDetalis}
