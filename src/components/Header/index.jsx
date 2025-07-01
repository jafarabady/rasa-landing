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
    <header className="px-[150px] py-0 mx-auto bg-dark h-[100px] sticky top-0 z-10 w-full">
      <div className="w-full h-full flex justify-between items-center">
        <div>
          <img className="" src={logo} alt="cubaar-logo" />
        </div>
        <div className="px-[200px] w-full flex justify-around items-center">
          {menuItems.map((item) => (
            <Link to={item.href}>{item.title}</Link>
          ))}
        </div>
        <div>
          <div className="w-[155px]">
            <Button size="sm">عضویت</Button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
