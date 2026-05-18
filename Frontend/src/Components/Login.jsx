import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // handle input changes
  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  // login submit
  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:4000/user-api/login",
        userData,
        {
          withCredentials: true,
        }
      );

      localStorage.setItem("isLoggedIn", "true");

      // optional: store user info
      localStorage.setItem("user", JSON.stringify(res.data.payload));

      // navigate after login
      navigate("/dashboard");

      // reload so Header updates
      window.location.reload();
    } catch (err) {
      console.log(err);

      if (err.response) {
        setError(err.response.data.message);
      } else {
        setError("Server Error");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-linear-to-r from-blue-500 via-purple-500 to-indigo-600 px-4">

      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">

        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Welcome Back
        </h1>

        <p className="text-center text-gray-500 mb-6">
          Login to continue tracking your expenses
        </p>

        {/* Error */}
        {error && (
          <div className="bg-red-100 text-red-600 p-2 rounded mb-4 text-sm">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleLogin} className="flex flex-col gap-4">

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={userData.email}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={userData.password}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 disabled:bg-gray-400"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>

        {/* Signup Redirect */}
        <p className="text-center text-gray-600 mt-6">
          Don&apos;t have an account?
        </p>

        <button
          onClick={() => navigate("/Signup")}
          className="w-full mt-3 border border-blue-600 text-blue-600 p-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition duration-300"
        >
          Create Account
        </button>

      </div>
    </div>
  );
};

export default Login;