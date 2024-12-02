import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const iconMap = {
    faPhone: faPhone,
    faEnvelope: faEnvelope,
    faMapMarkerAlt: faMapMarkerAlt,
};

const PageHeroSection = (props) => {
    return (
      <div className="bg-blue-600 text-white py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            {props.title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl mt-4 sm:mt-6 md:mt-8">
            {props.subTitle}
          </p>
        </div>
      </div>
    );
  };

  const CallToAction = (props) => {
    return (
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-blue-600 text-center text-white">
        <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            {props?.title || 'Ready to Get Started?'}
          </h2>
          <p className="text-base sm:text-lg md:text-xl mt-4 sm:mt-6">
            {props?.subTitle || 'Join our community and start building amazing projects today!'}
          </p>
          <button className="mt-6 sm:mt-8 px-6 sm:px-8 py-2 sm:py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition duration-200 ease-in-out">
            {props?.buttonText || 'Sign Up Now'}
          </button>
        </div>
      </section>
    );
  };
  

const AboutSection = () => {
    return (
        <section className="py-16 bg-gray-100 text-center">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-6">About Us</h2>
                <p className="text-xl mb-4 max-w-4xl mx-auto">
                    We are a team of passionate developers creating innovative solutions for the modern world. Our mission is to make programming accessible and fun for everyone.
                </p>
                <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                    Learn More
                </button>
            </div>
        </section>
    )
}

const Testimonial = () => {
    return (
        <section className="py-16 bg-gray-100 text-center">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-6">What Our Users Say</h2>
                <div className="max-w-2xl mx-auto">
                    <div className="p-6 border rounded-lg shadow-lg">
                        <p className="text-xl mb-4">"This platform has completely changed the way I think about programming. I can now build full-stack applications effortlessly."</p>
                        <p className="text-lg font-semibold">John Doe</p>
                        <p className="text-gray-600">Software Engineer</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

const FeatureSection = () => {
    return (
        <section className="py-16 bg-white text-center">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-6">Our Features</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    <div className="p-6 border rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold mb-4">Feature 1</h3>
                        <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra urna at tortor fermentum.</p>
                    </div>
                    <div className="p-6 border rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold mb-4">Feature 2</h3>
                        <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra urna at tortor fermentum.</p>
                    </div>
                    <div className="p-6 border rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold mb-4">Feature 3</h3>
                        <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra urna at tortor fermentum.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

const NavContactInfoSection = ({ dataList }) => {
    return (
        <section className="bg-gray-800 w-full">
            <div className="mx-10 flex text-white py-2 hidden lg:flex">
                {
                    dataList.map(([key, item], index) => (
                        <p key={key}>
                            <Link to={item.link} className="hover:underline">
                                <FontAwesomeIcon icon={iconMap[item.icon]} className="text-white mr-2" />
                                {item.data}
                            </Link>

                            {(index < dataList?.length - 1) ? <span className="mx-3">|</span> : ''}
                        </p>
                    ))
                }
            </div>
        </section>
    )
}

const ContactInfoSection = ({ dataList }) => {
    return (
        <section className='bg-gray-100'>
            <div className="container mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-center">
                {
                    dataList.map((item, index) => (
                        <div className="bg-white shadow-lg p-6 rounded-lg" key={item.title}>
                            <FontAwesomeIcon icon={iconMap[item.icon]} className="text-blue-600 text-3xl mb-4" />
                            <h2 className="text-xl font-bold">{item.title}</h2>
                            <Link to={item.link} rel="noopener noreferrer">
                                <p className="mt-2 text-gray-600">{item.data}</p>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

const MapSection = () => {
    return (
        <section className="bg-gray-100 pt-12">
            <div className="w-full text-center">
                <h2 className="text-3xl font-bold mb-4 text-blue-600">Our Location</h2>
                <p className="text-gray-600 mb-6">
                    Visit us at our office or contact us for more information. We're always happy to assist!
                </p>
                <div className="rounded-lg shadow-lg overflow-hidden">
                    {/* Google Map Embed */}
                    <iframe
                        title="Our Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14014.861576167213!2d77.31686056977536!3d28.580065148183866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce52550ad94ed%3A0x8e0c8b6bd1429dbb!2sSector%202%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </section>
    )
}

export {
    PageHeroSection,
    AboutSection,
    Testimonial,
    CallToAction,
    FeatureSection,
    ContactInfoSection,
    NavContactInfoSection,
    MapSection
}