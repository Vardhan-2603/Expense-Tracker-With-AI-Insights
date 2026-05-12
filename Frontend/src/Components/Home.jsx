import { useNavigate } from "react-router";

function Home() {

  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/Login");
  };

  const gotoSignup=()=>{
    navigate("/Signup")
  }

  return (
    <div className="min-h-screen w-full  flex flex-col justify-center items-center  bg-linear-to-r from-blue-500 via-purple-500 to-indigo-600 text-white">

      <h1 className="text-4xl font-bold mb-6">
        Smart Expense Tracker
      </h1>

      <p className="max-w-xl text-center text-lg mb-6">
        Track your daily expenses easily and understand where your money goes.
        Our application helps you monitor spending habits, view graphical
        reports, and manage your savings more effectively.
      </p>

      <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg max-w-md">
        <h2 className="text-xl font-semibold mb-3">
          Why Use This App?
        </h2>

        <ul className="list-disc pl-5 space-y-2">
          <li>Track your daily income and expenses</li>
          <li>View expense graphs and spending trends</li>
          <li>Analyze increase or decrease in spending</li>
          <li>Improve your savings habits</li>
        </ul>
      </div>         
      <button onClick={goToLogin} className="mt-6 bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-200">Start Tracking </button>
      <p className="max-w-xl text-center text-lg mt-6 font-semibold">don't have account,create an account</p>
      <button onClick={gotoSignup} className=" bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-200">create account </button>
    </div>
  );
}

export default Home;