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
import lineProject from '../../assets/images/project/line-project.png'
import lineFaq from '../../assets/images/faq/line-faq.png'
import CommandLine from './components/CommandLine'
import Monitoring from './components/Monitoring'
import { useDeviceType } from '../../hooks/use-device-type'
import Technologies from './components/Technologies'
import FAQ from './components/FAQ'

function Home() {
  const isMobile = useDeviceType()
  return (
    <>
      <PageMetadata
        title="کوبار | خدمات ابری"
        description="صفحه اصلی پروژه خدمات ابری کوبار"
        keywords="خدمات ابری, کوبار"
      />
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
      <Container>
        <div className="command-line z-10 relative flex justify-center items-center flex-col gap-4 pt-40 mt-40 md:mt-0">
          <CommandLine />
        </div>
      </Container>
      <Container isActiveContainer={!isMobile}>
        <div className="monitoring z-10 relative flex justify-center items-center flex-col gap-4 pt-40  md:mt-0">
          <Monitoring />
        </div>
      </Container>
      <Container>
        <div className="technologies z-10 relative flex justify-center items-center flex-col gap-4 mt-40">
          <Technologies />
        </div>
      </Container>
      <div className="relative my-16 md:mb-52 md:mt-32 w-full z-10">
        <div className="hidden md:block absolute top-0 left-0 w-full z-[1]">
          <img
            draggable="false"
            src={lineFaq}
            alt="lineProject"
            className="pointer-events-none w-full rotate-180"
          />
        </div>
        <div className="relative z-10 md:pt-28">
          <Container>
            <FAQ />
          </Container>
        </div>
      </div>
    </>
  )
}

export default Home
