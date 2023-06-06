import "../scss/main.scss";
import Header from "../components/Header.jsx";
import Hero from "../components/Hero.jsx";
import AboutMe from "../components/AboutMe.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";
import Prices from "../components/Prices.jsx";
import ScrollToTopButton from "../components/ScrollToTopButton.jsx";
import Taste from "../components/Taste.jsx";
import { Route, Routes } from "react-router-dom";
import TasteDetails from "../components/TasteDetails.jsx";
import React from "react";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <ScrollToTopButton />
              <Hero />
              <AboutMe />
              <Taste />
              <Prices />
              <Contact />
              <Footer />
            </>
          }
        ></Route>
        <Route path="/taste" element={<TasteDetails />}></Route>
      </Routes>
    </>
  );
}

export default App;
