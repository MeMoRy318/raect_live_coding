import React from 'react';

const MyButton = ({children,fn,style}) => {
    return (
        <button onClick={fn} style={{...style}}>
            {children}
        </button>
    );
};

export { MyButton };
