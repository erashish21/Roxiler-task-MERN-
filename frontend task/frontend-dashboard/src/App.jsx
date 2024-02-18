import React, { useState, useEffect } from "react";
import TransactionsTable from "./components/TransactionsTable";
import TransactionsStatistics from "./components/TransactionsStatistics";
import TransactionsBarChart from "./components/TransactionsBarChart";
//import { getCombinedData, listTransactions } from "./api"; // Import your API functions

const App = () => {
  const [selectedMonth, setSelectedMonth] = useState("March");
  const [searchText, setSearchText] = useState("");
  const [transactionsData, setTransactionsData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    // Fetch initial transactions data
    fetchTransactions();
  }, [selectedMonth, searchText, page]);

  const fetchTransactions = async () => {
    try {
      const transactions = await listTransactions(
        selectedMonth,
        searchText,
        page
      );
      setTransactionsData(transactions);
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  };

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div>
      {/* Transactions Table */}
      <TransactionsTable
        transactions={transactionsData}
        selectedMonth={selectedMonth}
        onSearch={(value) => setSearchText(value)}
        onNext={handleNextPage}
        onPrevious={handlePreviousPage}
      />

      {/* Transactions Statistics */}
      <TransactionsStatistics selectedMonth={selectedMonth} />

      {/* Transactions Bar Chart */}
      <TransactionsBarChart selectedMonth={selectedMonth} />
    </div>
  );
};

export default App;
