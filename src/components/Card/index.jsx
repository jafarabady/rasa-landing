import './index.css'
function Card({ stats, icon, text }) {
  return (
    <div className="card w-48 h-48 relative p-6 rounded-xl flex items-center justify-center hover:scale-105 transition">
      <div className="w-16 h-16 outer-circle">
        <div className="w-14 h-14 inner-circle">
          <img src={icon} alt={text} className="w-10 h-10" draggable="false" />
        </div>
      </div>

      <span className="truncate text-sm mb-14">{text || ''}</span>
    </div>
  )
}

export default Card
