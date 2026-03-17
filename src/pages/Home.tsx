import Hero from '../components/hero/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Contact from '../components/Contact';
import FinalCTA from '../components/FinalCTA';

export default function Home() {
    return (
        <>
            <Hero />
            <About />
            <Services />
            <FinalCTA />
            <Contact />
        </>
    );
}
