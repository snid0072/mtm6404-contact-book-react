import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/Home'
import ContactDetails from './pages/ContactDetails'
import AddContact from './pages/AddContact'
import EditContact from './pages/EditContact'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/contact/:id', element: <ContactDetails /> },
      { path: '/add', element: <AddContact /> },
      { path: '/edit/:id', element: <EditContact /> }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
