import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

function RootLayout() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <Header />
      <main className="w-full px-4 mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1260px] 2xl:max-w-[1440px]">
        <Outlet />
      </main>
    </div>
  )
}

export default RootLayout
