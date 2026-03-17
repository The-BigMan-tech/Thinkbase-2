import { Link } from 'react-router-dom';

export function NavMenus() {
    return (
        <div className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0 items-start md:items-center">
            {[
                { label: 'Home', href: '/#home', isInternal: true },
                { label: 'About us', href: '/#about', isInternal: true },
                { label: 'Services', href: '/services', isInternal: true },
                { label: 'Contact', href: '/#contact', isInternal: true }
            ].map((link) => (
                <Link 
                    key={link.label}
                    to={link.href} 
                    className="relative text-[#1d2d45] dark:text-gray-300 font-semibold text-sm tracking-wide transition-all duration-300 hover:text-[#324a70] dark:hover:text-blue-400 group"
                >
                    {link.label}
                    <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-[#324a70] dark:bg-blue-400 transition-all duration-300 group-hover:w-full" />
                </Link>
            ))}
        </div>
    )
}