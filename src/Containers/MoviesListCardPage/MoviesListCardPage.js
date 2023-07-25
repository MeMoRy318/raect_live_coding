import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {movieService} from "../../serivices/movieService";
import {MoviesListCard} from "../../components/MoviesListCard/MoviesListCard";

const MoviesListCardPage = () => {
    const {id} = useParams()
    const [movie, setMovie] = useState(null)
    useEffect(() => {
        (async() => {
            try {
                const {data} = await movieService.getMovieById(id);
                console.log(data)
                setMovie(data)
            }catch (error) {
                console.log(error)
            }

        })()
    }, [id])

    return (
        <div>
            {!!movie && <MoviesListCard movie={movie}/>}
        </div>
    );
};

export {MoviesListCardPage};
