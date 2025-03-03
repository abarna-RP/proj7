const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <div className="flex justify-center gap-2 p-4 text-black">
            <button 
                onClick={() => onPageChange(currentPage - 1)} 
                disabled={currentPage === 1} 
                className="px-4 py-2 bg-gray-300 rounded-md disabled:opacity-50">
                Previous
            </button>
            <span className="px-4 py-2 text-white">Page {currentPage} of {totalPages}</span>
            <button 
                onClick={() => onPageChange(currentPage + 1)} 
                disabled={currentPage >= totalPages} 
                className="px-4 py-2 bg-gray-300 rounded-md disabled:opacity-50">
                Next
            </button>
        </div>
    );
};

export default Pagination;
