import { RouterProvider } from 'react-router-dom'
import { ConfigProvider, theme } from 'antd'
import faIR from 'antd/lib/locale/fa_IR'
import router from './router/router'
import { HelmetProvider } from 'react-helmet-async'

function App() {
  return (
    <HelmetProvider>
      <ConfigProvider
        locale={faIR}
        direction="rtl"
        theme={{
          token: {
            fontFamily: 'PeydaWebFaNum',
            fontFamilyCode: 'PeydaWebFaNum',
          },
        }}
      >
        <RouterProvider router={router} />
      </ConfigProvider>
    </HelmetProvider>
  )
}

export default App
