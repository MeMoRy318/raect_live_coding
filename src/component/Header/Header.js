import React from 'react';
import {NavLink} from "react-router-dom";
import './Header.css';

const Header = () => {
    return (
        <div style={{width:'100%', height: '200px', background:'blue'}}>
            <nav className={'header__nav'}>
                <NavLink to={'todos'}>todos</NavLink>
                <NavLink to={'albums'}>albums</NavLink>
                <NavLink to={'comments'}>comments</NavLink>
            </nav>
        </div>
    );
};

export {Header};
