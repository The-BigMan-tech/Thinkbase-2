import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServiceDetails from './pages/ServiceDetails';

function App() {
    return (
        <div className="min-h-screen">
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/service/:id" element={<ServiceDetails />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;
