import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import './index.css'
import { EffectCoverflow } from 'swiper/modules'
import statistics from '../../../../../assets/images/statistics.png'
import { cardsData } from '../../../lib'

function ThreeDSlider() {
  return (
    <div className="w-full max-w-6xl mx-auto py-8">
      <Swiper
        dir="rtl"
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1.5}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        loop={true}
        coverflowEffect={{
          rotate: 30,
          stretch: 30,
          depth: 80,
          modifier: 1,
        }}
        modules={[EffectCoverflow]}
        className="mySwiper"
      >
        {cardsData.map((card, index) => (
          <SwiperSlide key={index}>
            <div className="glass-wrapper">
              <div className="text-sm text-gray">میزان مصرف</div>
              <div className="py-4 w-full overflow-hidden rounded-xl">
                <img src={statistics} alt={'statistics'} className="overflow-hidden rounded-xl" />
              </div>
              <div className="flex justify-start items-center gap-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <img className="w-8 h-8" src={card.icon} alt="card icon" />
                </div>
                <div>
                  <div className="text-sm text-gray-300">{card.title}</div>
                  <div className="text-[10px] text-gray/50">
                    کد:
                    {card.code}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default ThreeDSlider
