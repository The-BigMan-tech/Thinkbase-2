import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <div className="min-h-screen">
            <Header />
            <Hero />
            <About />
            <Services />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
