
import MovieList from "./MovieList";

const Favorites = ({ favorites, setFavorites }) => {
    const removeFromFavorites = (id) => {
        setFavorites(favorites.filter(movie => movie.imdbID !== id));
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold">Favorites</h2>
            {favorites.length > 0 ? (
                <MovieList movies={favorites} onFavorite={removeFromFavorites} />
            ) : (
                <p>No favorite movies added yet.</p>
            )}
        </div>
    );
};

export default Favorites;
