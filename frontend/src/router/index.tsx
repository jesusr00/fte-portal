import { createBrowserRouter } from 'react-router-dom'
import BaseLayout from '../common/layouts/BaseLayout'
import { lazy } from 'react'

const DirectionCouncil = lazy(() => import('../modules/direction-council'))
const Mission = lazy(() => import('../modules/mission'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        path: '',
        element: <DirectionCouncil />,
      },
      {
        path: 'direction-council',
        element: <DirectionCouncil />,
      },
      {
        path: 'mission',
        element: <Mission />,
      },
    ],
  },
])

export { router }
