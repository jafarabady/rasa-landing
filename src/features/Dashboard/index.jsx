import PageMetadata from '../../components/PageMetadata'
import Button from '../../components/Button'
import ServicesIntroBanner from './components/ServicesIntroBanner'
import './index.css'

function Dashboard() {
  return (
    <>
      <PageMetadata
        title="صفحه اصلی | پروژه"
        description="صفحه اصلی پروژه"
        keywords="پروژه, برنامه نویسی"
      />
      <div className="relative h-full">
        <div className="intro" />
        <ServicesIntroBanner />
      </div>
    </>
  )
}

export default Dashboard
