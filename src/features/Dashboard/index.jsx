import PageMetadata from '../../components/PageMetadata'
import Button from '../../components/Button'
import ServicesIntroBanner from './components/ServicesIntroBanner'
import './index.css'
import OurFeatures from './components/OurFeatures'
import Container from '../../components/Container'
import CustomerApps from './components/CustomerApps'

function Home() {
  return (
    <>
      <PageMetadata title="کوبار" description="صفحه اصلی پروژه" keywords="پروژه, کوبار" />
      <Container>
        <div className="intro relative h-full">
          <ServicesIntroBanner />
        </div>
        <div className="features z-10 relative flex justify-center items-center flex-col gap-4 pt-20">
          <OurFeatures />
        </div>
        <div className="customer z-10 relative flex justify-center items-center flex-col gap-4 pt-20">
          <CustomerApps />
        </div>
      </Container>
    </>
  )
}

export default Home
