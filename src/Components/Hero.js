import React from "react"

const Hero = () => {
    return (
        <section className="relative">
            {/* Carousel */}
            <div id="default-carousel" className="relative w-full" data-carousel="slide">
                <div className="relative h-56 sm:h-72 md:h-96 overflow-hidden rounded-lg">
                    {/* Slide 1 */}
                    <div className="duration-700 ease-in-out" data-carousel-item>
                        <img
                            src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            className="absolute block w-full h-full object-cover"
                            alt="Coding Inspiration 1"
                        />
                    </div>
                    {/* Slide 2 */}
                    <div className="duration-700 ease-in-out" data-carousel-item>
                        <img
                            src="https://images.pexels.com/photos/3861967/pexels-photo-3861967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            className="absolute block w-full h-full object-cover"
                            alt="Coding Inspiration 2"
                        />
                    </div>
                </div>
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-blue-900 opacity-40 rounded-lg"></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 sm:px-8">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6">
                    Build Your Future with <span className="text-blue-500">Code</span>
                </h1>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8">
                    Join our community of developers and turn your ideas into reality.
                </p>
                <button className="bg-blue-500 hover:bg-blue-700 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 text-sm sm:text-base md:text-lg lg:text-xl rounded shadow-lg">
                    Get Started
                </button>
            </div>
        </section>

    )
}

export default Hero