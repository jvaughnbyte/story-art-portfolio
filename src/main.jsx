import { createRoot } from 'react-dom/client'
import Home from './pages/Home'
import Story from './pages/Story'
import App from './App'
import './index.css'
import About from './pages/About'
import Contact from './pages/Contact'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([
  { path: "/", element: <App />, children: [
        { index: true, element: <Home /> },
        { path: "story", element: <Story /> },
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> },
  ]}
])


createRoot(document.getElementById('root')).render(
   
    <RouterProvider router={router} />

)
