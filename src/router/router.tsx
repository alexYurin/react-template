import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    async lazy() {
      const { MainLayout } = await import('@/layouts')

      return { Component: MainLayout }
    },
    children: [
      {
        index: true,
        async lazy() {
          const { HomePage } = await import('@/pages')

          return { Component: HomePage }
        },
      },
      {
        path: '*',
        async lazy() {
          const { NotFoundPage } = await import('@/pages')

          return { Component: NotFoundPage }
        },
      },
    ],
  },
])

export default router
