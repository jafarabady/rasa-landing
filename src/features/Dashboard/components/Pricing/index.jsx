import TableMobile from './TableMobile'
import TableDesktop from './TableDesktop'

function Pricing() {
  return (
    <>
      <h4 className="text-center text-4xl font-black">قیمت ها</h4>
      <span className="text-center text-gray">
        قول می‌دهیم تا وقتی که همه‌ی محصولات ما را امتحان کنید و از کیفیت خدمات ما مطمئن شوید، نیاز
        به پرداخت نخواهید داشت.
        <br />
        با ۱۰۰ هزار تومان اعتبار هدیه از طرف ما، شروع کنید.
      </span>
      <div className="hidden md:block">
        <TableDesktop />
      </div>
      <div className="w-full md:hidden">
        <TableMobile />
      </div>
    </>
  )
}

export default Pricing
