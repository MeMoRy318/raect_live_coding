import React, {createContext} from 'react';
import {usePostsById} from "../myCustomHooks/usePostsById";
const UsersContext = createContext(null)
 const UsersContextHok = ({children}) => {

    const {posts,setPostId} = usePostsById();

    return (
        <UsersContext.Provider value={{ posts,setPostId }}>
            {children}
        </UsersContext.Provider>
    );
};

export { UsersContextHok , UsersContext};
