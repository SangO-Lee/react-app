import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

function Movie({ coverImg, title, summary, genres, id }) {
    return (
        <div>
            <img src={coverImg} />
            <h2>
                <Link to={`/movie/${id}`}>&lt; {title} &gt;</Link>
            </h2>
            <p>{summary}</p>
            <ul>{genres.map((g) => [<li key={g}>{g}</li>])}</ul>
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