import Hero from "../Components/Hero";
import { AboutSection, FeatureSection, Testimonial, CallToAction } from '../Components/CommonComponents'


const Home = () => {
    return (
        <>
            <Hero />
            <AboutSection />
            <FeatureSection />
            <Testimonial />
            <CallToAction title='Ready to Get Started?' subTitle={`Join our community and start building amazing projects today!`} buttonText='Sign Up Now' />
        </>
    )
}

export default Home