import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Layout from './Layout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element= {<Layout />} >
      <Route path="" element={<App />}></Route>
      <Route path="/Skills" element={<Skills />}></Route>
      <Route path='/Projects' element= {<Projects />}></Route>
      <Route path='/Contact' element= {<Contact />}></Route>
    </Route>
  )
  // {path: '/', element: <App />},
  // {path: '/Skills', element: <Skills />},
  // { path: '/Projects', element: <Projects /> },
  // { path: '/Contact', element: <Contact />}
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
