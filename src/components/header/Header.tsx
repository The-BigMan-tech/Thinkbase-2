import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavMenus } from './Nav-menus';
import { GetStarted } from './Get-started';
import ThemeToggle from '../ThemeToggle';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
            <div className="max-w-7xl w-full bg-white/70 dark:bg-slate-900/80 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-full shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] px-8 py-3 transition-all duration-300">
                <div className="flex justify-between items-center">
                    <div className="flex-shrink-0">
                        <Link to="/" className="flex items-center hover:opacity-80 transition-opacity"> 
                            <img
                                src="assets/icon.png"
                                alt="Thinkbase Logo"
                                className="h-14 w-14 object-cover"
                            />
                            <h1 className='text-[#1d2d45] dark:text-white font-bold font-sans text-xl'>THINKBASE ADVISORY</h1>
                        </Link>
                    </div>

                    <nav className="hidden md:flex space-x-8">
                        <NavMenus/>
                    </nav>

                    <div className="hidden md:flex items-center space-x-4">
                        <ThemeToggle />
                        <GetStarted/>
                    </div>

                    <div className="md:hidden flex items-center space-x-2">
                        <ThemeToggle />
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? <X size={24} className="dark:text-white" /> : <Menu size={24} className="dark:text-white" />}
                        </button>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden absolute right-4 top-16 w-64 bg-white dark:bg-slate-900 border border-gray-100 dark:border-white/10 shadow-xl rounded-2xl z-50">
                    <div className="flex flex-col px-6 py-6 space-y-6">
                        <nav className="flex flex-col">
                            <NavMenus />
                        </nav>
                        <div className="pt-4 border-t border-gray-100 dark:border-white/10">
                            <GetStarted />
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
