import './index.css'
import { services } from '../../lib'
import { useDeviceType } from '../../../../hooks/use-device-type'
import servicesBackground from '../../../../assets/images/services/services-background.svg'

function OurServices() {
  const isMobile = useDeviceType()

  const shouldHaveLine = (index) => {
    if (isMobile) return index % 2 === 0
    return index !== 2 && index !== 5
  }

  return (
    <>
      <h5 className="text-center text-4xl font-black">سرویس هـای مـا</h5>
      <span className="text-center text-gray block">
        برخی از امکانات ما در سامانه خدمات ابری کوبــار، مواردیست که در روبه‌رو آمده است.
      </span>
      <div className="md:ml-40 relative service pb-40 md:pb-6 grid grid-cols-2 md:grid-cols-3 rounded-3xl pt-6 px-8 gap-8 mt-2 md:mt-8">
        <div className="absolute left-[5%] -bottom-1/3 md:hidden">
          <img src={servicesBackground} className="w-[325px] h-[325px]" alt="services-background" />
        </div>
        {services.map((item, index) => (
          <div
            key={index}
            className={`relative w-full h-full flex flex-col items-center justify-center gap-4 ${
              shouldHaveLine(index) ? 'line' : ''
            }`}
          >
            <div className="w-20 h-20 rounded-full circle flex items-center justify-center">
              <img src={item.icon} alt="services icon" />
            </div>
            <div className="text-center w-full md:w-3/5 text-sm font-light">{item.text}</div>
          </div>
        ))}
      </div>
    </>
  )
}

export default OurServices
