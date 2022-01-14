import React, {useState, useEffect} from 'react'
import axios from './axios';
import requests from './requests';
import './Banner.css';

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals)
            var result = Math.floor(Math.random() * request.data.results.length - 2)
            if (result >= 5) result++;
            setMovie(
                request.data.results[
                    result
                ]
            );
            return request;
        }
        fetchData();
    }, [])


    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n-1) + "..." : str;
    }


    return (
        <header 
            className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(
                    "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                )`,
                backgroundPosition: "center center",
            }}
        >
            <div className="banner__contents">
                <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className="banner__description">
                    {truncate(movie?.overview, 150)}
                </h1>
                <button className="banner__button"
                    type="button"
                    onClick={(e) => {
                        e.preventDefault();
                        window.location.href='https://github.com/jmd23/Movie-Recommender/blob/main/Movie%20Recommender.ipynb';
                        }}
                >General Movie Recommender System - Click!</button>
            </div>
            <div className="banner--fadeBottom" />
        </header>            

    )
}

export default Banner
