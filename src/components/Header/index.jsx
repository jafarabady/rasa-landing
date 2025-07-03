import React from 'react'
import logo from '../../assets/images/cubaar-logo.svg'
import { Link } from 'react-router-dom'
import Button from '../Button'

const menuItems = [
  { title: 'راهنمـــا', href: '' },
  { title: 'CI / CD', href: '' },
  { title: 'API', href: '' },
]
function Header() {
  return (
    <header className="w-full bg-dark h-[68px] fixed top-0 z-[100]">
      <div className="w-full px-4 mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1260px] 2xl:max-w-[1440px] h-full flex justify-between items-center">
        <div className="w-[180px]">
          <img className="" src={logo} alt="cubaar-logo" />
        </div>
        <div className="hidden px-[200px] w-full md:flex justify-around items-center">
          {menuItems.map((item) => (
            <Link to={item.href}>{item.title}</Link>
          ))}
        </div>
        <div>
          <div className="hidden md:flex w-[120px]">
            <Button size="sm">عضویت</Button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
