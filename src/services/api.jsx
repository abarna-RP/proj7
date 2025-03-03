export const fetchMovies = async (query, page = 1, type = "") => {
    const apiKey = "5f2c4543";
    const url = `https://www.omdbapi.com/?s=${query}&page=${page}&type=${type}&apikey=${apiKey}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.Response === "True") {
            return data;
        } else {
            throw new Error(data.Error);
        }
    } catch (error) {
        console.error("Error fetching movies:", error);
        return { Search: [], totalResults: "0" };
    }
};

export const fetchMovieDetails = async (id) => {
    const apiKey = "5f2c4543";
    const url = `https://www.omdbapi.com/?i=${id}&apikey=${apiKey}`;
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error("Error fetching movie details:", error);
    }
};
