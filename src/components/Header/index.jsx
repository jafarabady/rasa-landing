import React, { useState, useEffect } from 'react'
import logo from '../../assets/images/logo/cubaar-logo.svg'
import searchIcon from '../../assets/images/icons/search-icon.svg'
import { Link } from 'react-router-dom'
import Button from '../Button'

const menuItems = [
  { title: 'راهنمـــا', href: '' },
  { title: 'CI / CD', href: '' },
  { title: 'API', href: '' },
]

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen((prev) => !prev)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <div
      className={`w-full bg-dark h-[68px] fixed top-0 z-[100] transition-all duration-300 ${
        isScrolled ? 'shadow-lg' : ''
      }`}
    >
      <div className="w-full px-4 mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1260px] 2xl:max-w-[1440px] h-full flex justify-between items-center">
        <div className="relative z-10 md:hidden flex items-center justify-center">
          <button
            onClick={toggleMenu}
            className="w-[43px] h-[40px] flex items-center justify-center relative"
            aria-label="منو"
            aria-expanded={isOpen}
          >
            <span
              className={`
              absolute w-6 h-0.5 bg-white transition-all duration-300
              ${isOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'}
            `}
            ></span>
            <span
              className={`
              absolute w-6 h-0.5 bg-white transition-all duration-300
              ${isOpen ? 'opacity-0' : 'opacity-100'}
            `}
            ></span>
            <span
              className={`
              absolute w-6 h-0.5 bg-white transition-all duration-300
              ${isOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'}
            `}
            ></span>
          </button>
        </div>
        <div className="w-[180px]">
          <img className="" src={logo} alt="cubaar-logo" />
        </div>

        <div className="hidden md:flex px-[200px] w-full justify-around items-center">
          {menuItems.map((item) => (
            <Link
              key={item.title}
              to={item.href}
              className="text-white hover:text-primary transition-colors duration-200"
            >
              {item.title}
            </Link>
          ))}
        </div>

        <div className="flex items-center justify-center gap-4 md:gap-6">
          <button className="p-1 hover:opacity-80 transition-opacity">
            <img src={searchIcon} alt="جستجو" />
          </button>

          <div className="hidden md:flex w-[120px]">
            <Button size="sm">عضویت</Button>
          </div>
        </div>
      </div>

      <div
        className={`
        md:hidden bg-dark text-white w-full flex flex-col gap-4 border-t border-gray-700
        fixed top-[68px] left-0 right-0
        transform transition-all duration-300 ease-in-out
        ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
        overflow-hidden
      `}
      >
        <div className="py-4 px-6">
          {menuItems.map((item, index) => (
            <Link
              key={item.title}
              to={item.href}
              onClick={closeMenu}
              className="text-sm font-medium block py-3 hover:text-primary transition-colors duration-200"
              style={{ animationDelay: isOpen ? `${index * 0.1}s` : '0s' }}
            >
              {item.title}
            </Link>
          ))}
          <Button size="sm" onClick={closeMenu} className="mt-4 w-full">
            عضویت
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Header
