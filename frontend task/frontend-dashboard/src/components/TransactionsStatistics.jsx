
import React, { useState, useEffect } from "react";
//import { fetchStatistics } from "../api"; // Replace with your actual API module

const TransactionsStatistics = ({ selectedMonth }) => {
  const [statistics, setStatistics] = useState({});

  useEffect(() => {
    // Fetch statistics when the component mounts and whenever selectedMonth changes
    fetchStatistics(selectedMonth);
  }, [selectedMonth]);

  const fetchStatistics = async () => {
    try {
      const response = await fetchStatistics(selectedMonth);
      setStatistics(response.data);
    } catch (error) {
      console.error("Error fetching statistics:", error);
    }
  };

  return (
    <div>
      <h2>Transactions Statistics</h2>
      {/* Display statistics */}
    </div>
  );
};

export default TransactionsStatistics;
