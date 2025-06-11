import Dashboard from '../features/Dashboard'
import RootLayout from '../layout/RootLayout'
import Posts from '../features/PostsPage'
import Stats from '../features/Stats'
import NewPostPage from '../features/NewPostPage'
import ErrorPage from '../components/ErrorPage'
import { Suspense } from 'react'
import { Spin } from 'antd'

const routesConfig = [
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Spin />}>
            <Dashboard />
          </Suspense>
        ),
      },
      {
        path: 'posts',
        element: (
          <Suspense fallback={<Spin />}>
            <Posts />
          </Suspense>
        ),
      },
      {
        path: 'new-post',
        element: (
          <Suspense fallback={<Spin />}>
            <NewPostPage />
          </Suspense>
        ),
      },
      {
        path: 'stats',
        element: (
          <Suspense fallback={<Spin />}>
            <Stats />
          </Suspense>
        ),
      },
    ],
  },
]

export default routesConfig
