import { Link } from "react-router-dom"
const Footer = () => {
    const date = new Date()

    return (
        <footer className="py-10 bg-gray-900 text-white text-center">
        <p className="text-lg">&copy; {date.getFullYear()} Shubham Prajapati. All Rights Reserved.</p>
        <div className="mt-4">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-white">Privacy Policy</Link> 
            <span className="mx-2">|</span>
            <Link to="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link>
        </div>
    </footer>        
    )
}

export default Footer