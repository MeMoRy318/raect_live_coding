import React from 'react';
import {Outlet} from "react-router-dom";

const MyLayout = () => {
    return (
        <div>
            <header>header</header>
            <Outlet/>
            <footer>footer</footer>
        </div>
    );
};

export {MyLayout};
