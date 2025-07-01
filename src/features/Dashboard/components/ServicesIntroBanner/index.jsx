import Button from '../../../../components/Button'
import banner from '../../../../assets/images/intro-banner.png'
function ServicesIntroBanner() {
  return (
    <div className="overflow-hidden relative flex justify-start items-center">
      <div className="flex flex-col justify-start items-start gap-8">
        <h1 className="text-[3vw] font-[1000]">خدمات ابـری کوبــار</h1>
        <div className="text-[1.5vw] font-medium">
          سـکان بارهای عملیاتی خود را در اختیار ما بگذاریـــد.
          <br />
          شما فقط روی توسعه کار کنیـــد.
        </div>
        <div className="w-[255px]">
          <Button title="شروع کنیــد" />
        </div>
      </div>
      <img src={banner} alt="intro-banner" />
    </div>
  )
}

export default ServicesIntroBanner
