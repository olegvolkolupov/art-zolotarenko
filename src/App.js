import MainNavbar from "./components/MainNavbar";

import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Footer from "./components/Footer";

import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <MainNavbar />
      <div className="separator" id="home"></div>
      <Home />
      <div className="separator" id="gallery"></div>
      <Gallery />
      <div className="separator" id="about"></div>
      <About />
      <div className="separator" id="contact"></div>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
