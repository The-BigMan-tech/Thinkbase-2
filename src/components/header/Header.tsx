import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { NavMenus } from './Nav-menus';
import { GetStarted } from './Get-started';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 bg-white bg-opacity-50 backdrop-blur-sm z-50 shadow-sm shadow-[#5279b3]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0">
                        <a href="#home" className="flex items-center hover:opacity-80 transition-opacity"> 
                            <img
                                src="assets/icon.png"
                                alt="Thinkbase Logo"
                                className="h-14 w-14 object-cover"
                            />
                            <h1 className='text-[#1d2d45] font-bold font-sans text-xl'>THINKBASE ADVISORY</h1>
                        </a>
                    </div>

                    <nav className="hidden md:flex space-x-8">
                        <NavMenus/>
                    </nav>

                    <div className="hidden md:block">
                        <GetStarted/>
                    </div>

                    <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </  div>

            {isMenuOpen && (
                <div className="md:hidden absolute right-4 top-16 w-64 bg-white border border-gray-100 shadow-xl rounded-2xl z-50">
                    <div className="flex flex-col px-6 py-6 space-y-6">
                        <nav className="flex flex-col">
                            <NavMenus />
                        </nav>
                        <div className="pt-4 border-t border-gray-100">
                            <GetStarted />
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
