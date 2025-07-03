import Button from '../../../../components/Button'
import banner from '../../../../assets/images/intro-banner.png'
function ServicesIntroBanner() {
  return (
    <div className="relative flex justify-between items-center">
      <div className="flex flex-col justify-start items-start gap-8">
        <h1 className="text-5xl font-[1000]">خدمات ابـری کوبــار</h1>
        <div className="text-xl font-medium">
          سـکان بارهای عملیاتی خود را در اختیار ما بگذاریـــد.
          <br />
          شما فقط روی توسعه کار کنیـــد.
        </div>
        <div className="w-[200px]">
          <Button title="شروع کنیــد" />
        </div>
      </div>
      <img src={banner} alt="intro-banner" />
    </div>
  )
}

export default ServicesIntroBanner
