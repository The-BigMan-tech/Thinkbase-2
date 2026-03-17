import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServiceDetails from './pages/ServiceDetails';
import ComingSoon from './pages/ComingSoon';
import ScrollToHashElement from './components/ScrollToHashElement';
//
function App() {
    return (
        <div className="min-h-screen">
            <ScrollToHashElement />
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/service/:id" element={<ServiceDetails />} />
                    <Route path="/coming-soon" element={<ComingSoon />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;
