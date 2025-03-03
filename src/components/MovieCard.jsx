import { Link } from "react-router-dom";

const MovieCard = ({ movie, onFavorite }) => {
    return (
        <div className="border p-4 rounded shadow-md">
            <img src={movie.Poster} alt={movie.Title} className="w-full h-60 object-cover" />
            <h3 className="mt-2 text-lg font-bold">{movie.Title} ({movie.Year})</h3>
            <button 
                className="mt-2 px-3 py-1 bg-blue-500 text-white rounded"
                onClick={() => onFavorite(movie)}
            >
                Add to Favorites
            </button>
            <Link to={`/movie/${movie.imdbID}`} className="block mt-2 text-blue-600">
                View Details
            </Link>
        </div>
    );
};

export default MovieCard;
