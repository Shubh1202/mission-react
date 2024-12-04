import React, { useState } from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes  } from '@fortawesome/free-solid-svg-icons';
import JsonData from '../Data/Data.json'
import { NavContactInfoSection } from '../Components/CommonComponents'


const menuList = [
    { route: '/', title: 'Home' },
    { route: '/about-us', title: 'About Us' },
    { route: '/contact-us', title: 'Contact Us' },
    { route: '/tic-tac-toe', title: 'Game'},
    // { route: '/react-props', title: 'React Props' },
    // { route: '/react-list', title: 'React List' },
    { route: '/bg-color-changer', title: 'BG Changer' },

    // { route: '/to-doo', title: 'ToDoo' },
    // { route: '/hook-test', title: 'React Hook' },
    { route: '/random-string', title: 'Password Generator' },
    { route: '/currency-converter', title: 'Currency Converter' },
    { route: '/use-callback', title: 'ToDO' },
    { route: '/react-counter', title: 'React Counter' },
    { route: '/login', title: 'Login' },
]


const Navbar = () => {

    const contactData = Object.entries(JsonData.contactUs)
    const contactDataList = contactData.filter(([key]) => ['phone','email'].includes(key))

    const [isOpenMobileNav, setIsOpen] = useState(false)
    
    function toggleMenu() {
        setIsOpen(!isOpenMobileNav)
    }


    const Menu = menuList.map((data, index) => <li key={data.route}><Link to={data.route} className='hover:underline' onClick={toggleMenu}>{data.title}</Link></li>)

    return (
        <>
            {/* Top Navigation Setcion */}
            <NavContactInfoSection dataList={contactDataList} />

            <nav className="sticky top-0 bg-blue-500 text-white p-4 z-50 shadow-md">
                <div className="container mx-auto flex justify-between item-center">
                    <h1 className="text-xl font-bold uppercase">
                        <Link to={''} className="cursor-ponter">
                            Shubham
                        </Link>
                    </h1>

                    {/* Hamburgar Icon */}

                    <button className="block lg:hidden focus:outline-none" onClick={toggleMenu}>
                        <FontAwesomeIcon icon={faBars} className="text-white text-2xl"/>
                    </button>

                    <ul className="flex space-x-4 mt-1 hidden lg:flex">
                        {Menu}
                    </ul>
                </div>

                {isOpenMobileNav && (
                    <div className="lg:hidden absolute top-0 right-0 bg-gray-900 text-white flex w-full  p-3 pb-8">
                        <p className="absolute right-0 pr-4 mt-3 hover:cursor-pointer" onClick={toggleMenu}>
                            <FontAwesomeIcon icon={faTimes} className="text-white text-2xl"/>
                        </p>
                        <ul className="flex flex-col space-y-2 mt-4 px-4">
                            {Menu}
                        </ul>
                    </div>

                )
                }

            </nav>
        </>
    )
}

export default Navbar