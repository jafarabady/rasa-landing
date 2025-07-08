import Container from '../Container'
import logo from '../../assets/images/cubaar-logo.svg'
import { media, quickAccess, services } from '../../lib'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="w-full bg-dark pt-6 pb-20 mt-72">
      <Container className="flex flex-col md:flex-row gap-16 justify-center items-start !px-14 md:px-4">
        <div className=" flex flex-col gap-3">
          <div className="min-w-[200px] max-w-[200px]">
            <img className="" src={logo} alt="cubaar-logo" />
          </div>
          {media.map((item) => (
            <Link className="text-sm text-gray" to={item.url}>
              {item.title}
            </Link>
          ))}
        </div>
        <div className=" flex flex-col gap-3">
          <div className=" text-primary">دسترسی سریع</div>
          {quickAccess.map((item) => (
            <Link className="text-sm text-gray" to={item.url}>
              {item.title}
            </Link>
          ))}
        </div>
        <div className=" flex flex-col gap-3">
          <div className=" text-primary">سرویس ها</div>
          {services.map((item) => (
            <Link className="text-sm text-gray" to={item.url}>
              {item.title}
            </Link>
          ))}
        </div>
        <div className=" flex flex-col gap-3">
          <div className=" text-primary"> ارتباط با ما</div>
          <div className="flex flex-col gap-2 text-sm text-gray">
            <div>شماره تماس:</div>
            <div>0253.55522233</div>
          </div>
          <div className="flex flex-col gap-2 text-sm text-gray">
            <div>آدرس:</div>
            <div>قـم بلوار امین نبش کوچه 51</div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Footer
