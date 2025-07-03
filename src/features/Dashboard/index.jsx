import PageMetadata from '../../components/PageMetadata'
import Button from '../../components/Button'
import ServicesIntroBanner from './components/ServicesIntroBanner'
import './index.css'
import OurFeatures from './components/OurFeatures'

function Dashboard() {
  return (
    <>
      <PageMetadata
        title="صفحه اصلی | پروژه"
        description="صفحه اصلی پروژه"
        keywords="پروژه, برنامه نویسی"
      />
      <div className="intro relative h-full">
        <ServicesIntroBanner />
      </div>
      <div className="features z-10 relative flex justify-center items-center flex-col gap-4 pt-20">
        <OurFeatures />
      </div>
    </>
  )
}

export default Dashboard
