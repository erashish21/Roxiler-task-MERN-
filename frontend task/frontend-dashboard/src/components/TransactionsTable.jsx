
import React, { useState, useEffect } from "react";
//import { listTransactions } from ""; // Replace with your actual API module
import Pagination from "./Pagination";

const TransactionsTable = () => {
  const [month, setMonth] = useState("March");
  const [searchText, setSearchText] = useState("");
  const [transactions, setTransactions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // Fetch transactions when the component mounts and whenever month or search text changes
    fetchTransactions();
  }, [month, searchText, currentPage]);

  const fetchTransactions = async () => {
    try {
      const response = await listTransactions(month, searchText, currentPage);
      setTransactions(response.data);
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Transactions Dashboard</h2>
      <div className="flex items-center mb-4">
        <select
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          className="mr-4 p-2 border rounded"
        >
          <option value="Jan">Jan</option>
          <option value="Jan">Jan</option>
          <option value="Jan">Jan</option>
          <option value="Jan">Jan</option>
          <option value="Jan">Jan</option>
          <option value="Jan">Jan</option>
          <option value="Jan">Jan</option>
          <option value="Jan">Jan</option>
          <option value="Jan">Jan</option>
          <option value="Jan">Jan</option>
          <option value="Jan">Jan</option>
          <option value="Jan">Jan</option>
          <option value="Jan">Jan</option>
        </select>
        <input
          type="text"
          placeholder="Search transaction..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="p-2 border rounded"
        />
      </div>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2">Prices</th>
            <th className="px-4 py-2">Category</th>
            <th className="px-4 py-2">Sold</th>
            <th className="px-4 py-2">Image</th>
          </tr>
        </thead>
        <tbody>{/* Table data goes here */}</tbody>
      </table>
      <Pagination
        currentPage={currentPage}
        onNext={handleNextPage}
        onPrev={handlePrevPage}
        className="mt-4"
      />
    </div>
  );
};

export default TransactionsTable;
