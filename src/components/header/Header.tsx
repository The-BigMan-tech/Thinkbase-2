import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavMenus } from './Nav-menus';
import { GetStarted } from './Get-started';
import ThemeToggle from '../ThemeToggle';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-2 md:top-4 left-0 right-0 z-50 flex justify-center px-2 md:px-4">
            <div className="max-w-7xl w-full bg-white/80 dark:bg-slate-900/90 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-full shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] px-4 md:px-8 py-2 md:py-3 transition-all duration-300">
                <div className="flex justify-between items-center">
                    <div className="flex-shrink-0">
                        <Link to="/" className="flex items-center hover:opacity-80 transition-opacity gap-2"> 
                            <img
                                src="assets/icon.png"
                                alt="Thinkbase Logo"
                                className="h-10 w-10 md:h-14 md:w-14 object-cover"
                            />
                            <h1 className='text-[#1d2d45] dark:text-white font-bold font-sans text-lg md:text-xl hidden sm:block'>THINKBASE ADVISORY</h1>
                        </Link>
                    </div>

                    <nav className="hidden md:flex space-x-8">
                        <NavMenus/>
                    </nav>

                    <div className="hidden md:flex items-center space-x-4">
                        <ThemeToggle />
                        <GetStarted/>
                    </div>

                    <div className="md:hidden flex items-center gap-3">
                        <ThemeToggle />
                        <div className="scale-90">
                            <GetStarted />
                        </div>
                        <button 
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10"
                        >
                            {isMenuOpen ? <X size={24} className="text-[#1d2d45] dark:text-white" /> : <Menu size={24} className="text-[#1d2d45] dark:text-white" />}
                        </button>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden absolute left-4 right-4 top-16 bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl border border-gray-100 dark:border-white/10 shadow-2xl rounded-3xl z-50 overflow-hidden animate-in fade-in zoom-in duration-300">
                    <div className="flex flex-col p-8 space-y-8">
                        <nav className="flex flex-col">
                            <NavMenus />
                        </nav>
                        <div className="pt-6 border-t border-gray-100 dark:border-white/10 flex justify-center">
                             <div className="w-full">
                                <GetStarted />
                             </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
