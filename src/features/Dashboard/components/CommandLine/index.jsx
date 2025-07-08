import bannerDesc from '../../../../assets/images/command-line-desc.png'
import bannerMob from '../../../../assets/images/command-line-mob.png'
function CommandLine() {
  return (
    <>
      <h5 className="text-center text-4xl font-black">خـط فرمان ، </h5>
      <div className="text-commandLine text-center text-3xl font-black">
        لطفا فرمان خود را تایپ کنید ...
      </div>
      <span className="text-center text-gray block">
        با Liara CLI انعطاف بیشتری برای مدیریت سرویس های خود دارید.
      </span>
      <div className="hidden md:block">
        <img src={bannerDesc} alt="bannerDesc" />
      </div>
      <div className="block md:hidden">
        <img src={bannerMob} alt="bannerDesc" />
      </div>
    </>
  )
}

export default CommandLine
