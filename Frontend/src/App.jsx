import React from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router'
import Rootlayout from './Components/Rootlayout.jsx'
import Home from './Components/Home.jsx'
import Dashboard from './Components/Dashboard.jsx'
import Ai_insights from './Components/Ai_insights.jsx'
import Reports from './Components/Reports.jsx'
import Login from './Components/Login.jsx'
import Signup from './Components/signup.jsx'


function App() {
   const routerObj = createBrowserRouter([
    {
      path: '/',
      element: <Rootlayout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
  path: 'dashboard',
  element: <Dashboard />
},

{
  path: 'reports',
  element: <Reports />
},

{
  path: 'ai-insights',
  element: <Ai_insights />
},

{
  path: 'login',
  element: <Login />
},

{
  path: 'signup',
  element: <Signup />
}
      ]
    }
  ])

  return <RouterProvider router={routerObj} />
}

export default App