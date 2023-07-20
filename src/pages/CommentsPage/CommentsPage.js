
import React from 'react';
import {useFetching} from "../../myCustomHook/useFeching";
import {commentsService} from "../../services/commentsService";
import {Comments} from "../../component/Comments/Comments";
import {Outlet} from "react-router-dom";

const CommentsPage = () => {

    const {response,isLoading,error} = useFetching(commentsService.getAllComments())

    return (
        <div>
            <Outlet/>
            {!!response?.length && [...response].map(value => <Comments comment={value} key={value.id}/>)}
        </div>
    );
};


export {CommentsPage};
