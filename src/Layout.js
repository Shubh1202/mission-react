import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import PageNotFound from "./Pages/PageNotFound";
import CurrencyConverter from "./Pages/CurrencyConverter";
import BGChanger from "./Pages/BGChanger";
import RandomString from "./Pages/RandomString";
import TicTacToe from "./Pages/TicTacToe";

const Layout = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="about-us" element={<AboutUs />} />
                        <Route path="/contact-us" element={<ContactUs />} />
                        <Route path="/currency-convert" element={<CurrencyConverter />} />
                        <Route path="/background-changer" element={<BGChanger />} />
                        <Route path="/password-generator" element={<RandomString />} />
                        <Route path="/tic-tak-toe" element={<TicTacToe />} />
                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                </main>
                <Footer />
            </BrowserRouter>
        </>

    )
}

export default Layout