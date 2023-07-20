import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {MyLayout} from "./layout/MyLayout";
import {NotFoundPage} from "./pages/NotFoundPage/NotFoundPage";
import {routerEndpoints} from "./configs/routerEndpoints";
import {AlbumsPage} from "./pages/AlbumsPage/AlbumsPage";
import {TodosPage} from "./pages/TodosPage/TodosPage";
import {CommentsPage} from "./pages/CommentsPage/CommentsPage";
import {PostDetailsPage} from "./pages/PostDetailsPage/PostDetailsPage";
import {PrivateRoute} from "./hok/PrivateRoute";

const App = () => {

    return (
        <Routes>

         <Route path={'/'} element={<MyLayout/>}>
             <Route index element={<Navigate to={routerEndpoints.TODOS}/>}/>
             <Route path={routerEndpoints.ALBUMS} element={<PrivateRoute><AlbumsPage/></PrivateRoute>}/>
             <Route path={routerEndpoints.TODOS} element={<TodosPage/>}/>

             <Route path={routerEndpoints.COMMENTS} element={<CommentsPage/>}>
                 <Route path={routerEndpoints.POST_ID} element={<PostDetailsPage/>}/>
             </Route>
         </Route>


            <Route path={'*'} element={<NotFoundPage/>}/>
        </Routes>
    );
};

export {App};
