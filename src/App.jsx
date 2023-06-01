import "../scss/main.scss";
import Header from "../components/Header.jsx";
import Hero from "../components/Hero.jsx";
import AboutMe from "../components/AboutMe.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";
import Prices from "../components/Prices.jsx";
import ScrollToTopButton from "../components/ScrollToTopButton.jsx";

function App() {
  return (
    <>
      <Header />
      <ScrollToTopButton />
      <Hero />
      <AboutMe />
      <Prices />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
