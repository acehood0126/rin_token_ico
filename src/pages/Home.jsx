import Tokenomics from "../components/Tokenomics";
import Footer from "../components/Layout/Footer";
import Partner from "../components/Partners";
import Roadmap from "../components/RoadMap";
import Team from "../components/Team";
import Introduction from "../components/Introduction";
import NavBar from "../components/Layout/NavBar";
import EcoSystem from "../components/EcoSystem";
import About from "../components/About";

export default function Home() {
  return (
    <>
      <NavBar />
      <Introduction />
      <About />
      <EcoSystem />
      <Roadmap />
      <Tokenomics />
      <Team />
      <Partner />
      <Footer />
    </>
  );
}
