import './index.css'
import { Carousel } from 'antd'

const MonitorSlider = () => {
  const images = [
    'https://picsum.photos/id/237/1000/500',
    'https://picsum.photos/id/238/1000/500',
    'https://picsum.photos/id/244/1000/500',
    'https://picsum.photos/id/236/1000/500',
    'https://picsum.photos/id/235/1000/500',
  ]

  return (
    <div className="monitor-screen">
      <Carousel autoplay arrows autoplaySpeed={5000}>
        {images.map((image, index) => (
          <div key={index} className="slide-wrapper">
            <img loading='lazy' src={image} alt={`Slide ${index + 1}`} className="responsive-slide-img" />
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default MonitorSlider
