import logo from "../assets/logo_anhtu2.png";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="bg-900 mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img className="mx-2 w-10" src={logo} alt="logo" />
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/dangmaianhtu/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/anhtu2808" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="https://www.instagram.com/dangmaianhtu/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
                <a href="https://www.facebook.com/dangmaianhtu" target="_blank" rel="noopener noreferrer">
                    <FaFacebook />
                </a>
            </div>

        </nav>
    )
}

export default Navbar