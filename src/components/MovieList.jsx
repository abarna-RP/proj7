import MovieCard from "./MovieCard";

const MovieList = ({ movies, onFavorite }) => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {movies.map((movie) => (
                <MovieCard key={movie.imdbID} movie={movie} onFavorite={onFavorite} />
            ))}
        </div>
    );
};

export default MovieList;
