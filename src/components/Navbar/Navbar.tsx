import {NavLink} from "react-router-dom";
import {useEffect, useState} from "react";
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [isOpen]);

    return (
        <header className="header">
            {/* Menu burger pour les écrans larges */}
            <NavLink to="/" className="hidden sm:flex w-40 h-10 rounded-lg bg-white items-center
            justify-center flex font-bold shadow-md">
                <p className="blue-gradient_text">Scriptly Labs</p>
            </NavLink>
            <nav className="hidden sm:flex gap-7 font-medium">
                <NavLink
                    to='/about'
                    className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }
                >
                    À propos
                </NavLink>
                <NavLink
                    to='/projects'
                    className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}
                >
                    Projets
                </NavLink>
                <NavLink
                    to='/contact'
                    className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}
                >
                    Contact
                </NavLink>
            </nav>

            {/* Menu burger pour les écrans de petite taille */}
            <div className="sm:hidden modal">
                <div className="z-999 relative navbar-style-action">
                    <button
                        onClick={toggleMenu}
                        className="block text-white hover:text-gray-300 focus:text-gray-300 focus:outline-none"
                    >
                        {/* Icône du menu burger */}
                        {isOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="black">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="black">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Contenu du menu burger */}
                {isOpen && (
                    <nav onClick={toggleMenu} className="sm:hidden flex flex-col justify-center items-center gap-4 font-medium
                    fixed top-0 left-0 w-full h-[100vh] z-998 backdrop-filter backdrop-blur-md ">
                        <NavLink
                            to='/about'
                            onClick={toggleMenu}
                            className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}
                        >
                            À propos
                        </NavLink>
                        <NavLink
                            to='/projects'
                            onClick={toggleMenu}
                            className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}
                        >
                            Projets
                        </NavLink>
                        <NavLink
                            to='/contact'
                            onClick={toggleMenu}
                            className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}
                        >
                            Contact
                        </NavLink>
                        <NavLink to="/" onClick={toggleMenu} className="w-40 h-10 rounded-lg bg-white items-center
            justify-center flex font-bold shadow-md">
                            <p className="blue-gradient_text">Scriptly Labs</p>
                        </NavLink>
                    </nav>
                )}
            </div>
        </header>
    );
};

export default Navbar;
