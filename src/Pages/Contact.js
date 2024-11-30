import { PageHeroSection, ContactInfoSection, MapSection } from '../Components/CommonComponents'
import JsonData from '../Data/Data.json'

const ContactUs = () => {
    const dataList = Object.values(JsonData.contactUs)


    return (
        <>
            {/* Hero Section */}
            <PageHeroSection title='Contact Us' subTitle='We’d love to hear from you!' />

            {/* Contact Info Section */}
            <ContactInfoSection dataList={dataList} />



            {/* Contact Form Section */}
            <section className='bg-white'>
                <div className="container mx-auto py-16 px-4">
                    <div className="bg-white shadow-lg rounded-lg p-8">
                        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Send Us a Message</h2>
                        <form className="grid grid-cols-1 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-gray-600 font-medium">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Your Name"
                                    className="mt-2 block w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-gray-600 font-medium">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Your Email"
                                    className="mt-2 block w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-gray-600 font-medium">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    placeholder="Your Message"
                                    rows="4"
                                    className="mt-2 block w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <button
                                    type="button"
                                    className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition duration-300"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <MapSection />

        </>
    );
}

export default ContactUs