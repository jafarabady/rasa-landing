import './index.css'
import background from '../../assets/images/card/card-background.png'
function Card({ type, icon, text, value }) {
  return (
    <div
      className={`${type === 'stats' ? 'w-full' : 'w-full card'} relative h-48 p-6 rounded-xl flex flex-col items-center justify-center hover:scale-105 transition`}
    >
      {type === 'stats' && <img src={background} alt="background" className="absolute" />}
      <div className={`${type === 'stats' ? 'w-20 h-20' : 'w-16 h-16'} outer-circle`}>
        <div className={`${type === 'stats' ? 'w-[72px] h-[72px]' : 'w-14 h-14'} inner-circle`}>
          <img
            src={icon}
            alt={text}
            className={`${type === 'stats' ? 'w-14 h-14' : 'w-10 h-10'}`}
            draggable="false"
          />
        </div>
      </div>
      {type === 'stats' && value && (
        <span className="text-3xl text-primary font-black z-10 pb-4">{value}</span>
      )}
      <span
        className={`${type === 'stats' ? 'text-[14px] md:text-[16px] font-bold' : 'mb-12 font-bold text-[10px] md:text-sm'} text-white z-10`}
      >
        {text || ''}
      </span>
    </div>
  )
}

export default Card
