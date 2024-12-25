import { Routes, Route } from "react-router-dom"
import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"
import LandingPage from "./pages/LandingPage"
import DomesticToursPage from "./pages/DomesticToursPage"
import AboutPage from "./pages/AboutPage"
import TourDetailPage from "./pages/TourDetailPage"
import VideoAboutPage from "./pages/AboutUs"
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gray-50">
        <Header darkBg={true} />
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/tour-trong-nuoc" element={<DomesticToursPage />} />
            <Route path="/gioi-thieu" element={<AboutPage />} />
            <Route path="/ve-chung-toi" element={<VideoAboutPage />} />
            <Route path="/tour/:brand/:id" element={<TourDetailPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App