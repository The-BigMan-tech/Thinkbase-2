import { Link } from 'react-router-dom';

export function GetStarted() {
    return (
        <Link 
            to="/get-started" 
            className="block md:inline-block text-center w-full md:w-auto font-sans font-semibold text-lg bg-[#32517f] text-white px-6 py-2 rounded-3xl hover:bg-[#4167a0] transition-colors"
        >
            Get Started
        </Link>
    )
}