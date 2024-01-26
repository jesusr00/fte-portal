import { createBrowserRouter } from 'react-router-dom'
import BaseLayout from '../common/layouts/BaseLayout'
import { lazy } from 'react'

const DirectionCouncil = lazy(() => import('../modules/direction-council'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        path: '',
        element: <DirectionCouncil />,
      },
    ],
  },
])

export { router }
