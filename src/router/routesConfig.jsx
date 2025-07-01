import Dashboard from '../features/Dashboard'
import RootLayout from '../layout/RootLayout'
import ErrorPage from '../components/ErrorPage'

const routesConfig = [
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
    ],
  },
]

export default routesConfig
