import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../assets/css/Detail.scss";

function Detail() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const [likes, setLikes] = useState(0);
    const [isLiked, setIsLiked] = useState(false);

    const getMovie = async () => {
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
            )
        ).json();
        setMovie(json.data.movie);
        setLoading(false);
        console.log("like ", likes, movie.like_count);
    };
    useEffect(() => {
        getMovie();
        // eslint-disable-next-line
    }, []);
    useEffect(() => {
        if (movie.like_count !== undefined) {
            setLikes(movie.like_count);
        }
    }, [movie]);

    const onClickLikeBtn = () => {
        // 문제부분
        setLikes((prevLikes) => {
            const newLikes = isLiked ? prevLikes - 1 : prevLikes + 1;
            setIsLiked(!isLiked);
            return newLikes;
        });
    };

    return (
        <div className="container narrow">
            {loading ? (
                <div className="loading">
                    <h1>Loading...</h1>
                </div>
            ) : (
                <div>
                    {/* <h1>Detail</h1> */}
                    <Link to="/react-app" className="go-back-btn">
                        <span className="icon material-symbols-outlined">
                            chevron_left
                        </span>
                        <span className="label">Go back to the lists</span>
                    </Link>
                    <div className="movie-detail-wrap">
                        <div className="img-box">
                            <img
                                src={movie.large_cover_image}
                                alt={movie.title}
                                className="img-responsive"
                            />
                        </div>
                        <div className="txt-box">
                            <div className="title">
                                <h2>{movie.title_long}</h2>
                                <p className="rating">
                                    <span className="icon material-symbols-outlined">
                                        star
                                    </span>
                                    {movie.rating}
                                </p>
                            </div>
                            <ul className="genres-list">
                                {movie.genres.map((genre) => (
                                    <li key={genre}>{genre}</li>
                                ))}
                            </ul>

                            <h3>Description</h3>
                            <p>
                                {movie.description_full
                                    ? movie.description_full
                                    : "-"}
                            </p>
                            <button
                                className={`like-btn ${
                                    isLiked ? "clicked" : ""
                                }`}
                                onClick={onClickLikeBtn}
                            >
                                <span className="label">
                                    I Like this movie !
                                </span>

                                <div className="like-count">
                                    <span className="icon material-symbols-outlined">
                                        thumb_up
                                    </span>
                                    <span className="value">{likes}</span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Detail;
