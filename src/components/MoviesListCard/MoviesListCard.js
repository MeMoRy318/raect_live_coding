import React from 'react';
import {urls} from "../../configs/urls";

const MoviesListCard = ({movie}) => {

    const {backdrop_path,budget,genres,overview,title,release_date, vote_count, runtime} = movie;

    const img = urls.posterUrl.base + backdrop_path || urls.notFoundPoster.base
    return (
        <div>
            <div>
                <div>
                    <img src={img} alt={title}/>
                </div>
                <div className="short__description">
                    <div className="short-description-wrap">
                        <div className="description__field">
                            <span>name</span>
                            <span>{title}</span>
                        </div>
                        <div className="description__field">
                            <span>year</span>
                            <span>{release_date}</span>
                        </div>
                        <div className="description__field">
                            <span>genres</span>
                            <span>{[...genres].map(({name}) => name).join(", ")}</span>
                        </div>
                        <div className="description__field">
                            <span>Time</span>
                            <span>{runtime}</span>
                        </div>

                    </div>
                </div>
            </div>
            <div>{overview}</div>

        </div>
    );
};

export {MoviesListCard};
