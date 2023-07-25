import {createBrowserRouter, Navigate} from "react-router-dom";
import {MyLayout} from "./layout/MyLayout";
import {MoviesPage} from "./Containers/MoviesPage/MoviesPage";
import {routesURLs} from "./routesURLS";
import {MoviesListCardPage} from "./Containers/MoviesListCardPage/MoviesListCardPage";

export const router = createBrowserRouter([
    {
        path: routesURLs.MAIN,
        element: <MyLayout/>,
        children:[
            {
              index:true,
              element: <Navigate to='movieList'/>
            },
            {
                path: routesURLs.MOVIE_LIST,
                element: <MoviesPage/>,

            },
            {
                path: routesURLs.MOVIE_INFO + "/:id",
                element: <MoviesListCardPage/>
            }
        ]
    }
])
