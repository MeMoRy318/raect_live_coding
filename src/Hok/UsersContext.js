import React, {createContext} from 'react';
const UsersContext = createContext(null)
 const UsersContextHok = ({children,props}) => {
    return (
        <UsersContext.Provider value={{...props}}>
            {children}
        </UsersContext.Provider>
    );
};

export { UsersContextHok , UsersContext};
