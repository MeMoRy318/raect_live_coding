import React, {useEffect, useState} from 'react';
import {movieService} from "../../serivices/movieService";
import {MoviesList} from "../../components";
import styles from './MoviesPage.module.css'

const MoviesPage = () => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const {data} = await movieService.getAll();
                setMovies(data)
            } catch (error) {
                console.log(error)
            }
        })()
    }, [])

    return (
        <div className={styles.card_wrap}>
            {!!movies?.results?.length && [...movies.results].map(movie => <MoviesList key={movie.id} movie={movie}/> ) }
        </div>
    );
};

export {MoviesPage};
