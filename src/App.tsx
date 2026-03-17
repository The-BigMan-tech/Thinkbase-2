import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServiceDetails from './pages/ServiceDetails';
import ServicesPage from './pages/ServicesPage';
import ComingSoon from './pages/ComingSoon';
import GetStartedPage from './pages/GetStartedPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ScrollToHashElement from './components/ScrollToHashElement';
import CookieConsent from './components/CookieConsent';
//
function App() {
    return (
        <div className="min-h-screen">
            <ScrollToHashElement />
            <CookieConsent />
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/service/:id" element={<ServiceDetails />} />
                    <Route path="/coming-soon" element={<ComingSoon />} />
                    <Route path="/get-started" element={<GetStartedPage />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;
