import { useState } from "react";
import { IntlProvider } from "react-intl";

import locales from "./service/locales";

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
  const [locale, setLocale] = useState("en");

  const handleLanguageChange = (selectedLocale) => {
    setLocale(selectedLocale);
  };

  const messages = locales[locale];

  return (
    <IntlProvider locale={locale} messages={messages} defaultLocale="en">
      <div className="App">
        <MainNavbar
          setModalShow={setModalShow}
          onLanguageChange={handleLanguageChange}
        />
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
    </IntlProvider>
  );
}

export default App;
