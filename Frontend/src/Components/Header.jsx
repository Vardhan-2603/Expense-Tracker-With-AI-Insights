import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router';

function Header() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const status = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(status === "true");
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <div className='bg-amber-300 flex justify-between px-10 items-center'>

      <img src="data:image/png;base64,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" className='p-2 rounded-4xl' width="90" />

      <nav>
        <ul className='flex gap-10'>

          <li>
            <NavLink to="/" end>Home</NavLink>
          </li>

          <li>
           <NavLink to="/dashboard">Dashboard</NavLink>
          </li>

          <li>
            <NavLink to="/reports">Reports</NavLink>
          </li>

          <li>
           <NavLink to="/ai-insights">AI-Insights</NavLink>
          </li>

          {/* ✅ CONDITIONAL RENDERING */}
          {!isLoggedIn ? (
            <>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/signup">Signup</NavLink>
              </li>
            </>
          ) : (
            <li>
              <button onClick={handleLogout} className="bg-red-500 text-white px-3 py-1 rounded">Logout</button>                
              
            </li>
          )}

        </ul>
      </nav>
    </div>
  );
}

export default Header;