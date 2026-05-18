import { useNavigate } from "react-router";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 px-6">

      <div className="max-w-3xl text-center text-white">

        {/* Heading */}
        <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg">
          Smart Expense Tracker
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl leading-relaxed text-gray-100 mb-10">
          Track your daily expenses, monitor your spending habits,
          and manage your savings efficiently with smart analytics
          and beautiful visual reports.
        </p>

        {/* Features Section */}
        <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl shadow-2xl p-8 mb-10">

          <h2 className="text-2xl font-bold mb-6">
            Why Choose Our App?
          </h2>

          <div className="grid md:grid-cols-2 gap-5 text-left">

            <div className="bg-white/10 p-4 rounded-xl">
              <h3 className="font-semibold text-lg mb-2">
                💰 Expense Tracking
              </h3>

              <p className="text-gray-100">
                Easily record and organize your daily expenses.
              </p>
            </div>

            <div className="bg-white/10 p-4 rounded-xl">
              <h3 className="font-semibold text-lg mb-2">
                📊 Visual Reports
              </h3>

              <p className="text-gray-100">
                Analyze spending with charts and graphical insights.
              </p>
            </div>

            <div className="bg-white/10 p-4 rounded-xl">
              <h3 className="font-semibold text-lg mb-2">
                📈 Spending Analysis
              </h3>

              <p className="text-gray-100">
                Understand increases and decreases in expenses.
              </p>
            </div>

            <div className="bg-white/10 p-4 rounded-xl">
              <h3 className="font-semibold text-lg mb-2">
                🎯 Savings Goals
              </h3>

              <p className="text-gray-100">
                Improve financial habits and manage savings better.
              </p>
            </div>

          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-5">

          <button
            onClick={() => navigate("/Login")}
            className="bg-white text-blue-600 px-8 py-3 rounded-xl font-bold shadow-lg hover:bg-gray-100 hover:scale-105 transition duration-300"
          >
            Start Tracking
          </button>

          <button
            onClick={() => navigate("/Signup")}
            className="border-2 border-white px-8 py-3 rounded-xl font-bold hover:bg-white hover:text-blue-600 hover:scale-105 transition duration-300"
          >
            Create Account
          </button>

        </div>

        {/* Footer Text */}
        <p className="mt-8 text-gray-200">
          Start your journey towards smarter financial management today.
        </p>

      </div>
    </div>
  );
}

export default Home;