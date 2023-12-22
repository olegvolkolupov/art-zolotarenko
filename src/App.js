import { useState } from "react";

import MainNavbar from "./components/MainNavbar";

import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import AboutArtist from "./pages/AboutArtist";
import AboutArt from "./pages/AboutArt";
import Contact from "./pages/Contact";

import Footer from "./components/Footer";

import "./App.css";

function App() {
  const [modalShow, setModalShow] = useState(true);

  return (
    <div className="App">
      <MainNavbar setModalShow={setModalShow} />
      <div className="home-separator" id="home"></div>
      <Home show={modalShow} onHide={() => setModalShow(false)} />
      <div className="separator" id="gallery"></div>
      <Gallery />
      <div className="separator" id="aboutartist"></div>
      <AboutArtist />
      <div className="separator" id="aboutart"></div>
      <AboutArt />
      <div className="separator" id="contact"></div>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
