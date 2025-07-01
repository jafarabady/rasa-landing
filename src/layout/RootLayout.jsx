import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

function RootLayout() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <Header />
      <main className="w-full mx-auto px-[150px] pb-0">
        <Outlet />
      </main>
    </div>
  )
}

export default RootLayout
