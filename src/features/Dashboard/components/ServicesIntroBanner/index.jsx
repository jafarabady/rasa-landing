import Button from '../../../../components/Button'
import banner from '../../../../assets/images/intro-banner.png'
function ServicesIntroBanner() {
  return (
    <div className="relative flex flex-col-reverse md:flex-row justify-between items-center">
      <div className="flex flex-col justify-start items-start gap-8">
        <h1 className="hidden md:block text-5xl font-[1000]">خدمات ابـری کوبــار</h1>
        <div className="md:text-xl font-medium">
          سـکان بارهای عملیاتی خود را در اختیار ما بگذاریـــد.
          <br />
          شما فقط روی توسعه کار کنیـــد.
        </div>
        <div className="w-full md:w-[200px]">
          <Button title="شروع کنیــد" />
        </div>
      </div>
      <img src={banner} alt="intro-banner" className="w-[450px] md:w-[700px]" />
    </div>
  )
}

export default ServicesIntroBanner
