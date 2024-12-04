import { PageHeroSection, CallToAction } from '../Components/CommonComponents'


const AboutUs = () => {
  return (
    <>
      {/* Hero Section */}
      <PageHeroSection title='About Us' subTitle='Learn more about our journey, values, and the people who make it all happen.' />


      {/* Our Vision and Mission */}
      <section className="bg-gray-100">
        <div className="container mx-auto py-16 px-4 grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="bg-white shadow-lg p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">Our Vision</h2>
            <p className="text-gray-600">
              To be a global leader in providing innovative and sustainable solutions that empower individuals and
              businesses to thrive in the digital age.
            </p>
          </div>
          <div className="bg-white shadow-lg p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">Our Mission</h2>
            <p className="text-gray-600">
              To deliver exceptional products and services that inspire trust and foster long-term partnerships with
              clients and stakeholders.
            </p>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="bg-white">
        <div className="container mx-auto py-16 px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-blue-600">Meet Our Team</h2>
          <p className="text-gray-600 mb-8">
            A passionate group of professionals committed to making a difference.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="rounded-full mx-auto w-32 h-32 mb-4"
              />
              <h3 className="text-xl font-bold">John Doe</h3>
              <p className="text-gray-500">CEO & Founder</p>
            </div>
            {/* Team Member 2 */}
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="rounded-full mx-auto w-32 h-32 mb-4"
              />
              <h3 className="text-xl font-bold">Jane Smith</h3>
              <p className="text-gray-500">Chief Technology Officer</p>
            </div>
            {/* Team Member 3 */}
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="rounded-full mx-auto w-32 h-32 mb-4"
              />
              <h3 className="text-xl font-bold">Mark Johnson</h3>
              <p className="text-gray-500">Head of Marketing</p>
            </div>
          </div>
        </div>
      </section>


      {/* Call to Action */}
      <CallToAction title='Join Our Journey' subTitle={`Together, we can create something extraordinary. Let's make an impact together.`} buttonText='Contact Us' />
    </>
  );
}

export default AboutUs