import React from 'react';
import {useFetching} from "../../myCustomHook/useFeching";
import {todosService} from "../../services/todosService";
import {Albums} from "../../component/Albums/Albums";
import {albumsService} from "../../services/albumsService";

const AlbumsPage = () => {

    const {response,isLoading,error} = useFetching(albumsService.getAllAlbums())

    return (
        <div>
            {!!response?.length && [...response].map(value => <Albums album={value} key={value.id}/>)}
        </div>
    );
};

export {AlbumsPage};
