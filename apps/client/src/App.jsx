import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/home'
import Rate from './pages/rate'
import About from './pages/about'
import ErrorPage from './pages/error'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'rate',
        element: <Rate />,
      },
      {
        path: 'rate/:id',
        element: <Rate />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
}

export default App
