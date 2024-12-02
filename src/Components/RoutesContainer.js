import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from "./Navbar"
import Footer from "./Footer"
import Home from '../Pages/Home'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Login from "../Pages/Login"
import ReactList from "../Pages/ReactList"
import Counter from '../Pages/Counter'
import ReactProps from '../Pages/ReactProps'
import BGChanger from '../Pages/BGChanger'
import RandomString from '../Pages/RandomString'
import PageNotFound from '../Pages/PageNotFound'
import UseCallBack from '../Pages/UseCallBack'
import ToDoo from '../Pages/ToDoo'
import CurrencyConverter from '../Pages/CurrencyConverter'
import TicTacToe from '../Pages/TicTacToe'

const RoutesContainer = () => {
    return (

            <BrowserRouter>
                <div className='min-h-screen flex flex-col bg-gray-100' id='wrapper'>
                    <Navbar />
                    <div className='flex-grow'>
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='about-us' element={<About />} />
                            <Route path='contact-us' element={<Contact />} />
                            <Route path='login' element={<Login />} />
                            <Route path='react-list' element={<ReactList />} />
                            <Route path='react-props' element={<ReactProps />} />
                            <Route path='react-counter' element={<Counter />} />
                            <Route path='bg-color-changer' element={<BGChanger />} />
                            <Route path='random-string' element={<RandomString />} />
                            <Route path='use-callback' element={<UseCallBack />} />
                            <Route path='to-doo' element={<ToDoo />} />
                            <Route path='hook-test' element={<ToDoo />} />
                            <Route path='currency-converter' element={<CurrencyConverter />} />
                            <Route path='tic-tac-toe' element={<TicTacToe />} />
                            <Route path='*' element={<PageNotFound />} />
                        </Routes>
                    </div>
                    <Footer />
                </div>
            </BrowserRouter>

    )
}

export default RoutesContainer