import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";

const PrivateRoute = ({children}) => {

    const isLogin = false;

    let navigate = useNavigate();


    useEffect(() => {
        if (!isLogin) {
            navigate("/session-timed-out");
        }
    }, [isLogin]);


        return (
            <>
                {children}
            </>
        );




};

export {PrivateRoute};
