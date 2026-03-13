export function NavMenus() {
    return (
        <div className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0 items-start md:items-center">
            <a href="#home" className="text-black hover:text-[#21385c] transition-colors font-sans">Home</a>
            <a href="#about" className="text-black hover:text-[#305387] transition-colors font-sans">About us</a>
            <a href="#services" className="text-black hover:text-[#305387] transition-colors font-sans">Services</a>
            <a href="#contact" className="text-black hover:text-[#305387] transition-colors font-sans">Contact</a>
        </div>
    )
}