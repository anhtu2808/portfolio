import { useState } from 'react';
import logo from '../assets/logo_anhtu2.png'
import Navbar from './Navbar'
const Header = () => {
    const [navOpen, setNavOpen] = useState(false);
    return (
        <header className="fixed top-0 left-0 z-50 w-full h-20 flex items-center bg-gradient-to-b from-zinc-900 to-zinc-900/0">
            <div className="max-w-screen-2xl w-full px-4 mx-auto flex items-center justify-between md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
                <h1>
                    <a href="/"
                        className='logo'
                    >

                        <img
                            src={logo}
                            alt="logo"
                            width={40}
                            height={40}
                        />
                    </a>
                </h1>

                <div className="relative md:justify-self-center">
                    <button
                        className="menu-btn md:hidden"
                        onClick={() => setNavOpen((prev) => !prev)}
                    >
                        <span className="material-symbols-rounded">
                            {navOpen ? 'close' : 'menu'}
                        </span>
                    </button>
                    <Navbar navOpen={navOpen} />
                </div>
                <a 
                    href="#contact"
                    className="btn btn-secondary max-md:hidden md:justify-self-end"
                >
                    Contact Me
                </a>
            </div>
        </header>
    )
}

export default Header