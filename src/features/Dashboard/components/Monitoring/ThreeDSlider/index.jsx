import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import { EffectCoverflow } from 'swiper/modules'

const cardsData = [
  {
    title: 'حافظه داخلی',
    value: '103,638',
    change: '+1.49%',
    diff: '+8.1K this month',
    color: 'text-green-400',
  },
  {
    title: 'دیسک',
    value: '95,973',
    change: '-1.5%',
    diff: '-856 this month',
    color: 'text-red-400',
  },
  {
    title: 'دیسک',
    value: '88,485',
    change: '+2.5%',
    diff: '+12.5K this month',
    color: 'text-green-400',
  },
  {
    title: 'دیسک',
    value: '88,485',
    change: '+2.5%',
    diff: '+12.5K this month',
    color: 'text-green-400',
  },
  {
    title: 'دیسک',
    value: '88,485',
    change: '+2.5%',
    diff: '+12.5K this month',
    color: 'text-green-400',
  },
  {
    title: 'دیسک',
    value: '88,485',
    change: '+2.5%',
    diff: '+12.5K this month',
    color: 'text-green-400',
  },
  {
    title: 'دیسک',
    value: '88,485',
    change: '+2.5%',
    diff: '+12.5K this month',
    color: 'text-green-400',
  },
  {
    title: 'دیسک',
    value: '88,485',
    change: '+2.5%',
    diff: '+12.5K this month',
    color: 'text-green-400',
  },
]
function ThreeDSlider() {
  return (
    <div className="w-full max-w-4xl mx-auto py-10">
      {/*<Swiper*/}
      {/*  effect={'coverflow'}*/}
      {/*  grabCursor={true}*/}
      {/*  centeredSlides={true}*/}
      {/*  slidesPerView={'4'}*/}
      {/*  loop={true}*/}
      {/*  coverflowEffect={{*/}
      {/*    rotate: 30,*/}
      {/*    stretch: 30,*/}
      {/*    depth: 50,*/}
      {/*    modifier: 1,*/}
      {/*    // slideShadows: true,*/}
      {/*  }}*/}
      {/*  modules={[EffectCoverflow]}*/}
      {/*  className="mySwiper"*/}
      {/*>*/}
      {/*  {cardsData.map((card, index) => (*/}
      {/*    <SwiperSlide key={index} className="w-80">*/}
      <div className="bg-[#1d1f2b] rounded-2xl text-white p-6 shadow-xl">
        <div className="text-3xl font-bold">{'card.value'}</div>
        <div className={`mt-2 text-sm ${'card.color'}`}>{'card.change'}</div>
        <div className="text-gray-400 text-sm">{'card.diff'}</div>
        <div className="border-t border-gray-700 my-4"></div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-300">{'card.title'}</span>
          <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
            💾
          </div>
        </div>
      </div>
      {/*    </SwiperSlide>*/}
      {/*  ))}*/}
      {/*</Swiper>*/}
    </div>
  )
}
export default ThreeDSlider
