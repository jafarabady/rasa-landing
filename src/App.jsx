import { RouterProvider } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import faIR from 'antd/lib/locale/fa_IR'
import router from './router/router'

function App() {
  return (
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
  )
}

export default App
