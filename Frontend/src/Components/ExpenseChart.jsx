import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

function ExpenseChart({ expenses }) {
  const categories = [...new Set(expenses.map(exp => exp.category))];
  const categoryTotals = categories.map(cat => expenses
      .filter(exp => exp.category === cat)
      .reduce((sum, exp) => sum + exp.amount, 0)
  );

  const data = {labels: categories,
    datasets: [
      {
        label: "Expenses by Category",
        data: categoryTotals,
        backgroundColor: "#3b82f6"
      }
    ]
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow w-full max-w-xl">
      <Bar data={data} />
    </div>
  );
}

export default ExpenseChart;