import '@/styles/index.scss'

import { useMemo } from 'react'
import { ConfigProvider } from 'antd'
import { StyleProvider } from '@ant-design/cssinjs'
import { RouterProvider } from 'react-router-dom'
import { createThemeConfig, px2rem } from './themes'
import { router } from './router'
import themeSelector from './store/themes/selectors'

const App = () => {
  const themeName = themeSelector.use.themeName()

  const themeConfig = useMemo(() => createThemeConfig(themeName), [themeName])

  return (
    <ConfigProvider theme={themeConfig}>
      <StyleProvider transformers={[px2rem]} hashPriority='low'>
        <RouterProvider router={router} />
      </StyleProvider>
    </ConfigProvider>
  )
}

export default App
