import React from 'react';
import {Comments, Posts} from "./componets";
import {Cars} from "./componets/Cars/Cars";

const App = () => {
    return (
        <div
            style={{
                display: "flex"
            }}
        >
            <Cars/>
            <Comments/>
            <Posts/>
        </div>
    );
};

export {App};
