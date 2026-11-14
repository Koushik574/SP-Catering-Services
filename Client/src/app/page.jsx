import Header from "../components/Header";
import Home from "../components/Home";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import Menu from "../components/Menu";
import Gallery from "../components/Gallery";
import Feedback from "../components/Feedback";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Popups from "../components/Popups";

export default function Page() {
  return (
    <main>
      <Header />
      <Home />
      <AboutUs />
      <Services />
      <Menu />
      <Gallery />
      <Feedback />
      <Contact />
      <Footer />
      <Popups />
    </main>
  );
}
