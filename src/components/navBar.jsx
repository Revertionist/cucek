import React, { useState } from 'react';
import Menu from './Menu';
import { useNavStore } from '../store/globalState';

const NavBar = () => {
    const [isMenuVisible, setMenuVisible] = useState(false);
    const isNavOpen = useNavStore((state)=> state.isNavOpen)
    const closeNavBar = useNavStore((state)=> state.closeNavBar)
    const openNavBar = useNavStore((state)=> state.openNavBar)

    return (
        <nav className="z-10 block w-full px-4 py-2 bg-gray-200 shadow-md rounded-md lg:px-8 lg:py-3">
            <div className="container flex flex-wrap items-center justify-between text-slate-800">
                <a href="#" className="mr-4 block cursor-pointer py-1.5 text-base text-slate-800 font-semibold">
                    <img className='w-16' src="logo.png" alt="Logo" />
                </a>


                <div className="hidden lg:block">
                    <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                        <li
                            onClick={openNavBar}
                            className="flex items-center text-xl gap-x-2 text-slate-600"
                        >
                            <a href="#" className="flex items-center text-2xl">
                                <svg xmlns="http://www.w3.org/2000/svg" className='h-9 w-9 p-2' viewBox="0 0 50 50">
                                    <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
                                </svg>
                                Menu
                            </a>
                        </li>
                    </ul>
                </div>

                <button
                    className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
                    type="button"
                    onClick={closeNavBar}
                >
                    <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </span>
                </button>
            </div>
            {isNavOpen && <Menu onClose={closeNavBar} />}
        </nav>
    );
}

export default NavBar;
