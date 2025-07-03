import { stats } from '../../lib'
import Card from '../../../../components/Card'

function Stats() {
  return (
    <>
      <h4 className="text-center text-4xl font-black"> آمار سایت</h4>
      <div className="pt-20 w-3/4 grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-6 mx-auto">
        {stats.map((item) => (
          <Card type="stats" text={item.text} icon={item.icon} value={item.value} />
        ))}
      </div>
    </>
  )
}

export default Stats
