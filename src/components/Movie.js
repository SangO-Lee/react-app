import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

function Movie({ coverImg, title, summary, genres, id, year }) {
    return (
        <div class="movie-item">
            <Link to={`/movie/${id}`}>
                <div class="img-box">
                    <img src={coverImg} class="img-responsive" />
                </div>
                <div class="txt-box">
                    <h2 class="title">
                        {title} ({year})
                    </h2>
                    <ul class="genres-list">
                        {genres.map((g) => [<li key={g}>{g}</li>])}
                    </ul>
                    <p class="summary">
                        {summary.length > 235
                            ? `${summary.slice(0, 235)}...`
                            : summary}
                        <span class="more">view more</span>
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
