import { useMemo, useState } from 'react'
import logo from '../logo.svg'
import { Layout, Menu, theme, Drawer, Button } from 'antd'
import {
  HomeOutlined,
  SnippetsOutlined,
  DiffOutlined,
  BarChartOutlined,
  ArrowLeftOutlined,
  MenuOutlined,
  CloseOutlined,
} from '@ant-design/icons'
import { useLocation, useNavigate, Outlet } from 'react-router-dom'
import { useDeviceType } from '../hooks/use-device-type'

const { Header, Content, Sider } = Layout

const menuItems = [
  { title: 'صفحه اصلی', icon: <HomeOutlined />, path: '/' },
  { title: 'پست ها', icon: <SnippetsOutlined />, path: '/posts' },
  { title: 'پست جدید', icon: <DiffOutlined />, path: '/new-post' },
  { title: 'آمار بازدید', icon: <BarChartOutlined />, path: '/stats' },
]

function RootLayout() {
  const isMobile = useDeviceType()

  const [collapsed, setCollapsed] = useState(false)
  const [drawerVisible, setDrawerVisible] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()

  const selectedKey = useMemo(() => {
    return menuItems.findIndex((item) => item.path === location.pathname) + 1
  }, [location])

  const items = menuItems.map((item, index) => ({
    key: String(index + 1),
    icon: item.icon,
    label: item.title,
    onClick: () => {
      navigate(item.path)
      if (isMobile) setDrawerVisible(false)
    },
  }))

  const pageTitle = useMemo(() => {
    const currentItem = menuItems.find((item) => item.path === location.pathname)
    return currentItem ? currentItem.title : ''
  }, [location])

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {!isMobile ? (
        <Sider
          className="overflow-auto h-[100vh] sticky start-0 top-0 bottom-0"
          collapsible
          collapsed={collapsed}
          onCollapse={setCollapsed}
        >
          <div className="pt-2" />
          <Menu theme="dark" mode="inline" selectedKeys={[String(selectedKey)]} items={items} />
        </Sider>
      ) : (
        <Drawer
          title="منو"
          transitionName="slide-up"
          maskTransitionName="fade"
          placement="right"
          closable={true}
          onClose={() => setDrawerVisible(false)}
          open={drawerVisible}
          width={250}
          closeIcon={<CloseOutlined style={{ color: '#fff', fontSize: 20 }} />}
          styles={{
            content: {
              backgroundColor: '#001529',
              color: '#FFF',
            },
            body: {
              padding: 0,
            },
          }}
        >
          <Menu mode="inline" theme="dark" selectedKeys={[String(selectedKey)]} items={items} />
        </Drawer>
      )}

      <Layout>
        <Header className="sticky top-0 z-10 w-full px-2 bg-white shadow-md">
          <div className="w-full h-full flex justify-between items-center">
            <div className="flex justify-start gap-2 items-center">
              {isMobile && (
                <Button
                  icon={<MenuOutlined />}
                  type="text"
                  onClick={() => setDrawerVisible(true)}
                />
              )}
              <img className="w-12 h-12" src={logo} alt="logo" />
              <span className="text-blue-900 font-bold text-lg truncate">وب اپلیکیشن</span>
              <span className="text-gray-600 font-medium ml-4 truncate">{pageTitle}</span>
            </div>
            <div className="cursor-pointer" onClick={() => window.history.back()}>
              <ArrowLeftOutlined />
            </div>
          </div>
        </Header>

        <Content style={{ margin: '12px 12px 0' }}>
          <div
            style={{
              padding: 8,
              minHeight: '85vh',
              height: 'auto',
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}

export default RootLayout
