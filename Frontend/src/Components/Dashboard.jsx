import React, { useState } from "react";

function Dashboard() {

  const [expenses, setExpenses] = useState([
    { id: 1, category: "Food & Drinks", title: "Burger", amount: 10 },
    { id: 2, category: "Food & Drinks", title: "Coffee", amount: 5 },
    { id: 3, category: "Clothing", title: "T-shirt", amount: 40 },
  ]);

  // ✅ Dynamic categories (state)
  const [categories, setCategories] = useState([
    { title: "Food & Drinks", icon: "🍔" },
    { title: "Clothing", icon: "👕" },
    { title: "Fashion Accessories", icon: "👜" },
    { title: "Everyday Expenses", icon: "📅" },
  ]);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showAddCategory, setShowAddCategory] = useState(false);

  // Expense form
  const [newTitle, setNewTitle] = useState("");
  const [newAmount, setNewAmount] = useState("");

  // Category form
  const [newCategory, setNewCategory] = useState("");

  const filteredExpenses = expenses.filter(
    (exp) => exp.category === selectedCategory
  );

  // ✅ Add Expense
  const handleAddExpense = () => {
    if (!newTitle || !newAmount) return;

    const newExpense = {
      id: Date.now(),
      category: selectedCategory,
      title: newTitle,
      amount: Number(newAmount),
    };

    setExpenses([...expenses, newExpense]);
    setNewTitle("");
    setNewAmount("");
  };

  // ✅ Add Category
  const handleAddCategory = () => {
    if (!newCategory) return;

    const newCat = {
      title: newCategory,
      icon: "📁",
    };

    setCategories([...categories, newCat]); // add to end
    setNewCategory("");
    setShowAddCategory(false);
  };

  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold mb-4">Categories</h1>

      {/* ✅ Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {/* Existing Categories */}
        {categories.map((item, index) => {
          const total = expenses
            .filter((e) => e.category === item.title)
            .reduce((sum, e) => sum + e.amount, 0);

          return (
            <div
              key={index}
              onClick={() => setSelectedCategory(item.title)}
              className="bg-white shadow rounded-xl p-5 hover:shadow-lg cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-2">
                <span>{item.icon}</span>
                <h2 className="font-semibold">{item.title}</h2>
              </div>

              <p className="text-sm text-gray-600">
                Expenses: ${total}
              </p>
            </div>
          );
        })}

        {/* ✅ ALWAYS LAST: Add Category Card */}
        <div
          onClick={() => setShowAddCategory(true)}
          className="bg-gray-100 border-2 border-dashed rounded-xl p-5 flex items-center justify-center cursor-pointer hover:bg-gray-200"
        >
          <span className="text-xl font-bold">+ Add Category</span>
        </div>

      </div>

      {/* ✅ Add Category Modal */}
      {showAddCategory && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-sm">

            <h2 className="text-lg font-bold mb-3">Add Category</h2>

            <input
              type="text"
              placeholder="Category name"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              className="border p-2 w-full mb-3 rounded"
            />

            <button
              onClick={handleAddCategory}
              className="bg-green-500 text-white px-4 py-2 rounded w-full mb-2"
            >
              Add
            </button>

            <button
              onClick={() => setShowAddCategory(false)}
              className="bg-gray-400 text-white px-4 py-2 rounded w-full"
            >
              Cancel
            </button>

          </div>
        </div>
      )}

      {/* ✅ Expense Modal */}
      {selectedCategory && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">

          <div className="bg-white rounded-lg p-6 w-full max-w-md">

            <h2 className="text-xl font-bold mb-4">
              {selectedCategory}
            </h2>

            {/* Add Expense */}
            <div className="flex flex-col gap-2 mb-4">
              <input
                type="text"
                placeholder="Expense title"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                className="border p-2 rounded"
              />

              <input
                type="number"
                placeholder="Amount"
                value={newAmount}
                onChange={(e) => setNewAmount(e.target.value)}
                className="border p-2 rounded"
              />

              <button
                onClick={handleAddExpense}
                className="bg-green-500 text-white p-2 rounded"
              >
                Add Expense
              </button>
            </div>

            {/* List */}
            {filteredExpenses.length > 0 ? (
              <ul className="space-y-2">
                {filteredExpenses.map((exp) => (
                  <li key={exp.id} className="flex justify-between border-b pb-2">
                    <span>{exp.title}</span>
                    <span>${exp.amount}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No expenses yet</p>
            )}

            <button
              onClick={() => setSelectedCategory(null)}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
            >
              Close
            </button>

          </div>
        </div>
      )}

    </div>
  );
}

export default Dashboard;