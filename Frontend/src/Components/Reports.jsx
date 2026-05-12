// import React, { useState } from "react";
// import ExpenseChart from './ExpenseChart';

// function Reports() {
//   const [filterType, setFilterType] = useState("days");
//   const [days, setDays] = useState(30);

//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");

//   // Example data (replace with backend later)
//   const expenses = [
//     { category: "Food", amount: 200, date: "2026-03-10" },
//     { category: "Transport", amount: 100, date: "2026-03-12" },
//     { category: "Shopping", amount: 500, date: "2026-03-13" },
//     { category: "Food", amount: 150, date: "2026-03-15" },
//     { category: "Bills", amount: 300, date: "2026-02-25" }
//   ];

//   // Filter Logic
//   const filteredExpenses = expenses.filter(exp => {
//     const expDate = new Date(exp.date);

//     if (filterType === "days") {
//       const today = new Date();
//       const diffDays = (today - expDate) / (1000 * 60 * 60 * 24);
//       return diffDays <= days;
//     }

//     if (filterType === "custom" && startDate && endDate) {
//       return expDate >= new Date(startDate) && expDate <= new Date(endDate);
//     }

//     return true;
//   });

//   return (
//     <div className="p-6">

//       <h2 className="text-2xl font-bold mb-4">Expense Analytics</h2>

//       {/* Filter Type */}
//       <div className="mb-4 flex gap-4">
//         <button
//           onClick={() => setFilterType("days")}
//           className="bg-blue-500 text-white px-3 py-1 rounded"
//         >
//           By Days
//         </button>

//         <button
//           onClick={() => setFilterType("custom")}
//           className="bg-purple-500 text-white px-3 py-1 rounded"
//         >
//           Custom Range
//         </button>
//       </div>

//       {/* Days Filter */}
//       {filterType === "days" && (
//         <select
//           onChange={(e) => setDays(Number(e.target.value))}
//           className="mb-4 p-2 border rounded"
//         >
//           <option value={7}>Last 7 Days</option>
//           <option value={30}>Last 30 Days</option>
//           <option value={365}>Last Year</option>
//         </select>
//       )}

//       {/* Custom Date Range */}
//       {filterType === "custom" && (
//         <div className="flex gap-4 mb-4">
//           <input
//             type="date"
//             onChange={(e) => setStartDate(e.target.value)}
//             className="border p-2 rounded"
//           />

//           <input
//             type="date"
//             onChange={(e) => setEndDate(e.target.value)}
//             className="border p-2 rounded"
//           />
//           {filteredExpenses.length === 0 && (
//           <p className="text-red-500">No data for selected period</p>
//           )}
//         </div>
//       )}

//       {/* Chart */}
//       <ExpenseChart expenses={filteredExpenses} />

     

//     </div>
//   );
// }

// export default Reports

import React, { useState } from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Bar, Line, Pie } from "react-chartjs-2";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ArcElement
);

function Reports() {

  // ✅ Sample Data (later connect to backend/context)
  const [expenses] = useState([
    { category: "Food & Drinks", amount: 120, date: "2026-03-10" },
    { category: "Clothing", amount: 80, date: "2026-03-12" },
    { category: "Food & Drinks", amount: 50, date: "2026-03-15" },
    { category: "Transport", amount: 40, date: "2026-02-10" },
    { category: "Shopping", amount: 200, date: "2026-01-05" },
  ]);

  const [filter, setFilter] = useState("monthly");

  // ✅ Filter Logic
  const filterData = () => {
    const now = new Date();

    return expenses.filter((item) => {
      const itemDate = new Date(item.date);

      if (filter === "daily") {
        return itemDate.toDateString() === now.toDateString();
      }

      if (filter === "monthly") {
        return (
          itemDate.getMonth() === now.getMonth() &&
          itemDate.getFullYear() === now.getFullYear()
        );
      }

      if (filter === "yearly") {
        return itemDate.getFullYear() === now.getFullYear();
      }

      return true;
    });
  };

  const filteredExpenses = filterData();

  // ✅ Group by category
  const categoryMap = {};

  filteredExpenses.forEach((item) => {
    if (!categoryMap[item.category]) {
      categoryMap[item.category] = 0;
    }
    categoryMap[item.category] += item.amount;
  });

  const labels = Object.keys(categoryMap);
  const dataValues = Object.values(categoryMap);

  // ✅ Chart Data
  const data = {
    labels,
    datasets: [
      {
        label: "Expenses",
        data: dataValues,
        backgroundColor: [
          "#60A5FA",
          "#34D399",
          "#FBBF24",
          "#F87171",
          "#A78BFA",
        ],
      },
    ],
  };

  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold mb-4">📊 Analytics</h1>

      {/* ✅ Filter Buttons */}
      <div className="flex gap-3 mb-6">
        {["daily", "monthly", "yearly"].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-4 py-2 rounded ${
              filter === type
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* ✅ Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Bar Chart */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-semibold mb-2">Bar Chart</h2>
          <Bar data={data} />
        </div>

        {/* Pie Chart */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-semibold mb-2">Pie Chart</h2>
          <Pie  data={data} />
        </div>

      </div>

    </div>
  );
}

export default Reports;