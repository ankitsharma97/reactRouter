import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'




const routes = createBrowserRouter([{
  path: '/',
  element:<Layout />,
  children: [
    { path: '', element: <Home /> },
    { path: 'about', element: <About/> },
    { path: 'contact', element: <Contact/> },
    { path: 'user/:userId', element: <User/> },
    { path: 'github',element: <Github/>}
  ],
}])

// const routes = createBrowserRouter(
//   createRoutesFromElements(
//     <routes path="/" element={<Layout />}>
//       <routes path="" element={<Home />} />
//       <routes path="about" element={<About />} />
//       <routes path="contact" element={<Contact />} />
//     </routes>

//   )
// )


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={routes}></RouterProvider>
  </React.StrictMode>,
)
