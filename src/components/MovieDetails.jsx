import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "../services/api";

const MovieDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        fetchMovieDetails(id).then(setMovie);
    }, [id]);

    if (!movie) return <p>Loading...</p>;

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold">{movie.Title} ({movie.Year})</h2>
            <img src={movie.Poster} alt={movie.Title} className="w-60 my-4" />
            <p><strong>Genre:</strong> {movie.Genre}</p>
            <p><strong>Plot:</strong> {movie.Plot}</p>
            <p><strong>Actors:</strong> {movie.Actors}</p>
            <p><strong>Ratings:</strong> {movie.imdbRating}</p>
        </div>
    );
};

export default MovieDetails;
