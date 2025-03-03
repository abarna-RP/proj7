const SearchBar = ({ onSearch }) => {
    const handleSearch = (e) => {
        if (e.key === "Enter") {
            onSearch(e.target.value);
        }
    };

    return (
        <div className="p-4 text-2xl">
            <input
                type="text"
                placeholder="Search movies..."
                className="w-full p-2 border border-gray-300 rounded"
                onKeyDown={handleSearch}
            />
        </div>
    );
};

export default SearchBar;
