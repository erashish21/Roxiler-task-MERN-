
import React, { useState, useEffect } from "react";
//import { fetchBarChart } from "../api"; // Replace with your actual API module

const TransactionsBarChart = ({ selectedMonth }) => {
  const [barChartData, setBarChartData] = useState([]);

  useEffect(() => {
    // Fetch bar chart data when the component mounts and whenever selectedMonth changes
    fetchBarChart(selectedMonth);
  }, [selectedMonth]);

  const fetchBarChart = async () => {
    try {
      const response = await fetchBarChart(selectedMonth);
      setBarChartData(response.data);
    } catch (error) {
      console.error("Error fetching bar chart data:", error);
    }
  };

  return (
    <div>
      <h2>Transactions Bar Chart</h2>
      {/* Display bar chart using a chart library */}
    </div>
  );
};

export default TransactionsBarChart;
