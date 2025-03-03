import { useState, useEffect } from "react";
import { fetchMovies } from "../services/api";
import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";
import Pagination from "../components/Pagination";
import Favorites from "../components/Favorites";

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState("Avengers");
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        fetchMovies(query, currentPage).then((data) => {
            setMovies(data.Search || []);
            setTotalPages(Math.ceil(Number(data.totalResults) / 10));
        });
    }, [query, currentPage]);

    const addToFavorites = (movie) => {
        if (!favorites.some(fav => fav.imdbID === movie.imdbID)) {
            setFavorites([...favorites, movie]);
        }
    };

    return (
        <div className="bg-[url(/public/lm.jpg)] ... text-white">
            <SearchBar onSearch={setQuery} />
            <MovieList movies={movies} onFavorite={addToFavorites} />
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
            <Favorites favorites={favorites} />
        </div>
    );
};

export default Home;
