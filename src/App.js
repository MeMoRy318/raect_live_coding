import React from 'react';
import {Route, Routes} from "react-router-dom";
import {MyLayout} from "./layout/MyLayout";
import {NotFoundPage} from "./pages/NotFoundPage/NotFoundPage";

const App = () => {

    return (
        <Routes>

         <Route path={'/'} element={<MyLayout/>}>

         </Route>


            <Route path={'*'} element={<NotFoundPage/>}/>
        </Routes>
    );
};

export {App};
