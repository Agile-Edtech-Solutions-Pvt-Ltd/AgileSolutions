import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import FloatingButtons from "./components/Common/FloatingButtons";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

// Service Category Pages
import WebDevelopment from "./pages/services/WebDevelopment";
import MobileAppDevelopment from "./pages/services/MobileAppDevelopment";
import DigitalMarketing from "./pages/services/DigitalMarketing";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Service Category Routes */}
            <Route path="/services/web-development" element={<WebDevelopment />} />
            <Route path="/services/mobile-development" element={<MobileAppDevelopment />} />
            <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
          </Routes>
        </main>
        <Footer />
        <FloatingButtons />
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;