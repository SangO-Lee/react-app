import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

function Movie({ coverImg, title, summary, genres, id, year }) {
    return (
        <div className="movie-item">
            <Link to={`${process.env.PUBLIC_URL}/movie/${id}`}>
                <div className="img-box">
                    <img
                        src={coverImg}
                        className="img-responsive"
                        alt={title}
                    />
                </div>
                <div className="txt-box">
                    <h2 className="title">
                        {title} ({year})
                    </h2>
                    <ul className="genres-list">
                        {genres.map((g) => [<li key={g}>{g}</li>])}
                    </ul>
                    <p className="summary">
                        {summary.length > 235
                            ? `${summary.slice(0, 235)}...`
                            : summary}
                        <span className="more">view more</span>
                    </p>
                </div>
            </Link>
        </div>
    );
}

Movie.propTypes = {
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    id: PropTypes.number.isRequired,
};
export default Movie;
