import Hero from '../components/hero/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Contact from '../components/Contact';
import CoreValues from '../components/CoreValues';

export default function Home() {
    return (
        <>
            <Hero />
            <CoreValues />
            <About />
            <Services />
            <Contact />
        </>
    );
}
