// import logo from "../assets/logo_anhtu2.png";
// import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

/**
 * Node modules
 */
import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const Navbar = ({ navOpen }) => {
    const lastActiveLink = useRef();
    const activeBox = useRef();

    const initActiveBox = () => {
        activeBox.current.style.top = lastActiveLink.current.offsetTop + 'px';
        activeBox.current.style.left = lastActiveLink.current.offsetLeft + 'px';
        activeBox.current.style.width = lastActiveLink.current.offsetWidth + 'px';
        activeBox.current.style.height = lastActiveLink.current.offsetHeight + 'px';
    }
    useEffect(initActiveBox, []);
    window.addEventListener('resize', initActiveBox);

    const activeCurrentLink = (event) => {
        lastActiveLink.current?.classList.remove('active');

        lastActiveLink.current = event.target;
        event.target.classList.add('active');
        activeBox.current.style.top = event.target.offsetTop + 'px';
        activeBox.current.style.left = event.target.offsetLeft + 'px';
        activeBox.current.style.width = event.target.offsetWidth + 'px';
        activeBox.current.style.height = event.target.offsetHeight + 'px';

    }
    const navItems = [
        {
            label: 'Home',
            link: '#home',
            className: 'nav-link active',
            ref: lastActiveLink
        },
        {
            label: 'About',
            link: '#about',
            className: 'nav-link'
        },
        {
            label: 'Technology',
            link: '#technology',
            className: 'nav-link'
        },
        {
            label: 'Work',
            link: '#work',
            className: 'nav-link'
        },
        {
            label: 'Project',
            link: '#project',
            className: 'nav-link'
        },
        {
            label: 'Review',
            link: '#review',
            className: 'nav-link'
        },
        {
            label: 'Contact',
            link: '#contact',
            className: 'nav-link md:hidden'
        }
    ];
    return (

        <nav className={"navbar " + (navOpen ? 'active' : '')}>
            {navItems.map(({ label, link, className, ref }, index) => (
                <a
                    key={index}
                    href={link}
                    className={className}
                    ref={ref}
                    onClick={activeCurrentLink}
                >
                    {label}
                </a>
            ))}
            <div className="active-box" ref={activeBox}></div>
        </nav>
    )
}
Navbar.propTypes = {
    navOpen: PropTypes.bool.isRequired
}

/* Old Navbar */
// <nav className="bg-900 mb-20 flex items-center justify-between py-6">
//     <div className="flex flex-shrink-0 items-center">
//         <img className="mx-2 w-10" src={logo} alt="logo" />
//     </div>
//     <div className="m-8 flex items-center justify-center gap-4 text-2xl">
//         <a href="https://www.linkedin.com/in/dangmaianhtu/" target="_blank" rel="noopener noreferrer">
//             <FaLinkedin />
//         </a>
//         <a href="https://github.com/anhtu2808" target="_blank" rel="noopener noreferrer">
//             <FaGithub />
//         </a>
//         <a href="https://www.instagram.com/dangmaianhtu/" target="_blank" rel="noopener noreferrer">
//             <FaInstagram />
//         </a>
//         <a href="https://www.facebook.com/dangmaianhtu" target="_blank" rel="noopener noreferrer">
//             <FaFacebook />
//         </a>
//     </div>

// </nav>
/*----------------------------------*/
export default Navbar