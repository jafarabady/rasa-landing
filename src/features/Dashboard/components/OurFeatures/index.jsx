import { features } from '../../lib'
import Card from '../../../../components/Card'

function OurFeatures() {
  return (
    <>
      <h2 className="text-center text-4xl font-black"> امکانات ما</h2>
      <span className="text-center text-gray">
        برخی از امکانات ما در سامانه خدمات ابری کوبــار، مواردیست که در روبه رو آمده است.
      </span>
      <div className="pt-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 mx-auto">
        {features.map((feature) => (
          <Card text={feature.text} icon={feature.icon} />
        ))}
      </div>
    </>
  )
}

export default OurFeatures
