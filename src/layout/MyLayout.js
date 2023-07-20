import React from 'react';
import {Outlet} from "react-router-dom";
import {Header} from "../component/Header/Header";

const MyLayout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <footer>footer</footer>
        </div>
    );
};

export {MyLayout};
