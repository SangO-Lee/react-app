import { useState, useEffect } from "react";
import Movie from "../components/Movie";
import "../assets/css/Home.scss";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
        const json = await (
            await fetch(
                "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
            )
        ).json();
        setMovies(json.data.movies);
        setLoading(false);
    };
    useEffect(() => {
        getMovies();
    }, []);
    console.log(movies);
    return (
        <div className="container">
            {loading ? (
                <div className="loading">
                    <h1>Loading...</h1>
                </div>
            ) : (
                <div className="movie-list">
                    {movies.map((movie) => (
                        <Movie
                            key={movie.id}
                            coverImg={movie.medium_cover_image}
                            title={movie.title}
                            summary={movie.summary}
                            genres={movie.genres}
                            id={movie.id}
                            year={movie.year}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
export default Home;
