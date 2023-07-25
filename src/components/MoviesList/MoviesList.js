import React from 'react';
import {urls} from "../../configs/urls";
import {useNavigate} from "react-router-dom";
import styles from './MovieList.module.css';
import {routesURLs} from "../../routesURLS";

const MoviesList = ({movie}) => {
    const {id, vote_average, title, release_date,poster_path} = movie
    const navigate = useNavigate()
    const img = urls.posterUrl.base + poster_path || urls.notFoundPoster.base
    return (
        <div
            className={styles.card}
            style={{backgroundImage: `url(${img})`}}
            onClick={()=> navigate(routesURLs.MOVIE_INFO + `/${id}`)}
        >
            <div className={styles.card__info}>
                <div>{title}</div>
                <div>Movie: {release_date}</div>
            </div>
        </div>
    );
};

export {MoviesList};
