import { technologies } from '../../lib'
import './index.css'
function Technologies() {
  return (
    <>
      <h6 className="text-center text-4xl font-black">
        از هر تکنولوژی استفاده کنید ما آن را میزبانی می کنیم
      </h6>
      <span className="text-center text-gray block">
        برای ایجاد پروژه جدید مراحل زیر را نیاز است طی کنید.
      </span>
      <div className="hidden md:grid grid-cols-8 grid-rows-4 gap-4">
        {technologies.desktop.map((item, index) => (
          <div
            key={index}
            className={`relative rounded-xl border border-techBorder flex items-center justify-center ${
              index === 11
                ? 'col-span-2 row-span-2 w-full h-full cubaar-background'
                : 'w-20 h-20 logo-background'
            }`}
          >
            <img
              className={`${index === 11 ? 'w-[82px] h-[82px]' : 'w-14 h-14 grayscale opacity-50  hover:grayscale-0 hover:opacity-100 '} object-contain transition duration-300 hover:scale-105 `}
              src={item.src}
              alt=""
            />
          </div>
        ))}
      </div>
      <div className="w-full grid grid-cols-3 grid-rows-4 gap-4 md:hidden place-items-center">
        {technologies.mobile.map((item, index) => (
          <div
            key={index}
            className={`relative rounded-xl border border-techBorder flex items-center justify-center 
              w-20 h-20 logo-background`}
          >
            <img
              className={` w-14 h-14 grayscale opacity-50 transition duration-300 hover:grayscale-0 hover:opacity-100 hover:scale-105 object-contain `}
              src={item.src}
              alt=""
            />
          </div>
        ))}
      </div>
    </>
  )
}

export default Technologies
