
import React from "react";

const Pagination = ({ currentPage, onNext, onPrev }) => {
  return (
    <div className="flex items-center justify-center mt-4">
      <button
        onClick={onPrev}
        className="px-4 py-2 mr-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
      >
        Previous
      </button>
      <span className="text-lg font-bold">{currentPage}</span>
      <button
        onClick={onNext}
        className="px-4 py-2 ml-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
