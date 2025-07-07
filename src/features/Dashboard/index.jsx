import PageMetadata from '../../components/PageMetadata'
import ServicesIntroBanner from './components/ServicesIntroBanner'
import './index.css'
import OurFeatures from './components/OurFeatures'
import Container from '../../components/Container'
import CustomerApps from './components/CustomerApps'
import Stats from './components/Stats'
import Pricing from './components/Pricing'
import OurServices from './components/OurServices'
import CreatingProject from './components/CreatingProject'
import lineProject from '../../assets/images/line-project.png'

function Home() {
  return (
    <>
      <PageMetadata title="کوبار" description="صفحه اصلی پروژه" keywords="پروژه, کوبار" />
      <Container className="pt-20 md:pt-40">
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
      <div className="stats">
        <Container>
          <Stats />
        </Container>
      </div>
      <Container className="pt-20 md:pt-40">
        <div className="price z-10 relative flex justify-center items-center flex-col gap-4 pt-20">
          <Pricing />
        </div>
        <div className="services z-10 relative flex justify-center items-center flex-col gap-4 pt-20">
          <OurServices />
        </div>
      </Container>
      <div className="hidden md:flex project">
        <div className="absolute top-0 z-0">
          <img draggable="false" src={lineProject} alt={'lineProject'} />
        </div>
        <CreatingProject />
      </div>
    </>
  )
}

export default Home
