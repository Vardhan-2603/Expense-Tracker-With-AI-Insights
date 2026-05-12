import React from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router'
import Rootlayout from './Components/Rootlayout'
import Home from './Components/Home'
import Dashbord from './Components/Dashbord'
import Ai_insights from './Components/Ai_insights'
import Reports from './Components/Reports'
import Login from './Components/Login'
import Signup from './Components/signup'


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
          path: 'Dashbord',
          element: <Dashbord />
        },
        {
          path: 'reports',
          element: <Reports />
        },
        {
          path: 'Ai_insights',
          element: <Ai_insights />
        },
        {
          path:'Login',
          element:<Login/>
        },
        {
          path:'signup',
          element:<Signup/>
        }
      ]
    }
  ])

  return <RouterProvider router={routerObj} />
}

export default App