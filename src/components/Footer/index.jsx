import React from 'react'
import Container from '../Container'
import logo from '../../assets/images/cubaar-logo.svg'

function Footer() {
  return (
    <div className="w-full bg-dark pt-6 pb-20 mt-72">
      <Container className="flex flex-col md:flex-row gap-16 justify-center items-start px-14 md:px-4">
        <div className=" flex flex-col gap-3">
          <div className="w-full">
            <img className="" src={logo} alt="cubaar-logo" />
          </div>
          <div className="text-sm text-[#AEB5C6]">لینکدین</div>
          <div className="text-sm text-[#AEB5C6]">اینستاگرام </div>
          <div className="text-sm text-[#AEB5C6]">تلگرام</div>
          <div className="text-sm text-[#AEB5C6]">گیت هاب</div>
        </div>
        <div className=" flex flex-col gap-3">
          <div className=" text-primary">دسترسی سریع</div>
          <div className="text-sm text-[#AEB5C6]">قیمت ها</div>
          <div className="text-sm text-[#AEB5C6]">مستندات</div>
          <div className="text-sm text-[#AEB5C6]">داشبورد</div>
          <div className="text-sm text-[#AEB5C6]">sla</div>
        </div>
        <div className=" flex flex-col gap-3">
          <div className=" text-primary">سرویس ها</div>
          <div className="text-sm text-[#AEB5C6]">دیتابیس ها</div>
          <div className="text-sm text-[#AEB5C6]">پلتفورم ها</div>
          <div className="text-sm text-[#AEB5C6]">One-Click apps</div>
          <div className="text-sm text-[#AEB5C6]">sla</div>
        </div>
        <div className=" flex flex-col gap-3">
          <div className=" text-primary"> ارتباط با ما</div>
          <div className="text-sm text-[#AEB5C6]">شماره تماس: 0253.55522233</div>
          <div className="text-sm text-[#AEB5C6]">شماره تماس: 0253.55522233</div>
          <div className="text-sm text-[#AEB5C6]">شماره تماس: 0253.55522233</div>
          <div className="text-sm text-[#AEB5C6]">آدرس: قـم بلوار امین نبش کوچه 51</div>
        </div>
      </Container>
    </div>
  )
}

export default Footer
