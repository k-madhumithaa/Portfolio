import { BrowserRouter, Routes, Route } from "react-router-dom";
import GalaxyBackground from "./components/effects/GalaxyBackground";
import CustomCursor from "./components/effects/CustomCursor";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Education from "./components/sections/Education";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import NotFound from "./pages/NotFound";

function Portfolio() {
  return (
    <>
      <GalaxyBackground />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
