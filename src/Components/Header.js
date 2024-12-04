import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import Logo from '../assets/logo513.png'
import { NavContactInfoSection } from './CommonComponents'
import JsonData from '../Data/Data.json'

const menuArray = [
    { title: 'Home', path: '/' },
    { title: 'About Us', path: '/about-us' },
    { title: 'Contact Us', path: '/contact-us' },
    { title: 'Game', path: '/tic-tak-toe' },
    { title: 'Services', path: '/services' },
    { title: 'Currency Conversion', path: '/currency-convert' },
    { title: 'BG Changer', path: '/background-changer' },
    { title: 'Password Generator', path: '/password-generator' },
    { title: 'Portfolio', path: '/portfolio' },
    // {title: '', path: ''},
    // {title: '', path: ''},
]

const menuList = menuArray.map((item, index) => (<NavLink key={`${index}_${item.title}`} to={item.path} className={({isActive, isPending}) => isPending ? 'text-yellow-300' : isActive ? 'text-yellow-300' : 'hover:text-yellow-300' }>{item.title}</NavLink>))
const mobileMenu = menuArray.map((item, index) => (<li><NavLink key={`${index}_${item.title}`} to={item.path} className={({isActive, isPending}) => isPending ? 'text-yellow-300' : isActive ? 'text-yellow-300' : 'hover:text-yellow-300' }>{item.title}</NavLink></li>))

const Header = () => {
    const contactData = Object.entries(JsonData.contactUs)
    const contactDataList = contactData.filter(([key]) => ['phone', 'email'].includes(key))

    const [isOpenMobileNav, setIsOpen] = useState(false)

    function openMobileMenu() {
        setIsOpen(!isOpenMobileNav)
    }

    return (
        <>
            <NavContactInfoSection dataList={contactDataList} />
            <nav className="sticky top-0 bg-gradient-to-r from-blue-600 to-blue-800 shadow-md z-10">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <h1 className="text-xl font-bold uppercase text-white">
                    <NavLink to={'/'}>
                        Shubham
                        {/* <img src={Logo} alt="Logo" className="w-10 h-10" /> */}
                    </NavLink>
                    </h1>
                    <div className="md:hidden">
                        <button onClick={openMobileMenu} className="text-white focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                    <nav id="menu" className="hidden md:flex space-x-6 text-white">
                        {menuList}
                    </nav>
                </div>

                {isOpenMobileNav && (
                    <div id="mobile-menu" className="lg:hidden absolute left-0 w-full bg-gradient-to-r from-blue-600 to-blue-800">
                        <ul className="space-y-4 text-white p-4" onClick={openMobileMenu}>
                            {mobileMenu}
                        </ul>
                    </div>
                )}
            </nav>
        </>

    )
}

export default Header