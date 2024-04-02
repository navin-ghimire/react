import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './features/home/Home';
import About from './features/About';
import Contact from './features/Contact';
import RootLayOut from './ui/RootLayOut';

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayOut />,
      children: [
        { index: true, element: <Home /> },
        { path: 'About', element: <About /> },
        { path: 'Contact', element: <Contact /> },

      ]
    },

  ]);






  return <RouterProvider router={router} />
}

export default App
