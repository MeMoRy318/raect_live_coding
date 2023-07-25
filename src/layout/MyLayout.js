import React from 'react';
import styles from './layout.module.css'
import {Header} from "../components/Header/Header";
import {Outlet} from "react-router-dom";

const MyLayout = () => {
    return (
        <div className={styles.wrapper}>
          <Header/>
            <div className={styles.content}>
               <Outlet/>
            </div>
        </div>
    );
};

export {MyLayout};
