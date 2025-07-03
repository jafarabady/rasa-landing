import firstBanner from '../../../../assets/images/customer-apps-1.png'
import secondBanner from '../../../../assets/images/customer-apps-2.png'
function CustomerApps() {
  return (
    <>
      <h2 className="text-4xl font-black"> برنامه‌ی خود را روی سرور اجرا کنید</h2>
      <div className="pt-3 flex flex-col md:flex-row gap-4 items-center justify-center">
        <img src={firstBanner} alt="firstBanner" />
        <img src={secondBanner} alt="firstBanner" />
      </div>
    </>
  )
}

export default CustomerApps
