import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); // ❗ important

    // fake login (later connect backend)
    localStorage.setItem("isLoggedIn", "true");

    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex justify-center items-start pt-24">
      <div className="bg-gray-200 p-6 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-4">Login</h1>

        <form onSubmit={handleLogin} className="flex flex-col gap-3">
          <input type="text" className="border p-2 rounded" placeholder="Email"/>
          <input type="password" className="border p-2 rounded" placeholder="Password"/>

          <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;