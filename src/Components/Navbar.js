import React, { useState } from "react"
import { Outlet, Link } from "react-router-dom"

const menuList = [
    { route: '/', title: 'Home' },
    { route: '/about-us', title: 'About Us' },
    { route: '/contact-us', title: 'Contact Us' },
    { route: '/react-props', title: 'React Props' },
    { route: '/react-list', title: 'React List' },
    { route: '/react-counter', title: 'React Counter' },
    { route: '/bg-color-changer', title: 'BG Changer' },
    // { route: '/to-doo', title: 'ToDoo' },
    { route: '/hook-test', title: 'React Hook' },
    { route: '/use-callback', title: 'ToDO' },
    { route: '/random-string', title: 'Random String' },
    { route: '/currency-converter', title: 'Currency Converter' },
    { route: '/login', title: 'Login' },
]


const Navbar = () => {
    const [isOpenMobileNav, setIsOpen] = useState(false)

    function toggleMenu() {
        setIsOpen(!isOpenMobileNav)
    }

    const Menu = menuList.map((data, index) => <li key={data.route}><Link to={data.route} className='hover:underline' onClick={toggleMenu}>{data.title}</Link></li>)

    return (
        <>
            <div className="flex  bg-gray-800 w-full text-white px-4 py-1 hidden lg:flex">
                <p>
                    Phone:
                    <a href="tel:+91-9807272530" className="hover:underline ml-2">+91-9807272530</a>
                </p>
                <p className="ml-3">
                    Email:
                    <a href="mail:shubhamprajapati1202@gmail.com" className="hover:underline ml-2">shubhamprajapati1202@gmail.com</a>
                </p>
            </div>
            <nav className="sticky top-0 bg-blue-500 text-white p-4 z-50 shadow-md">
                <div className="container mx-auto flex justify-between item-center">
                    <h1 className="text-xl font-bold">
                        My Website
                    </h1>

                    {/* Hamburgar Icon */}

                    <button className="block lg:hidden text-gray-200 focus:outline-none" onClick={toggleMenu}>
                        <p className="text-2xl m-0 p-0">=</p>
                    </button>

                    <ul className="flex space-x-4 mt-1 hidden lg:flex">
                        {Menu}
                    </ul>
                </div>

                {isOpenMobileNav && (
                    <div className="lg:hidden absolute top-0 right-0 bg-gray-900 text-white flex w-full  p-3 pb-8">
                        <p className="absolute right-0 px-4 text-2xl hover:cursor-pointer" onClick={toggleMenu}>x</p>
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