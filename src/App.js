// CSS
import "./App.css";

// Components
import Navbar from "./components/Navbar";
import Cube from "./components/SpecialCube";
import Footer from "./components/Footer";
import Tilter from "./components/Tilter";

// Images
import twitter from "./images/twitter.png";
import twitch from "./images/twitch.png";
import gmail from "./images/gmail.png";
import artstation from "./images/artstation.png";
import github from "./images/github-w.png";
import background from "./images/background.png";

export default function App() {
  return (
    <div className="parent">
      <Navbar />
      <Footer />
      <Tilter imgsource={background} />
      <Cube
        textColor="white"
        image={twitter}
        text="TWITTER"
        color="white"
        url="https://twitter.com/bathinjan_"
      />
      <Cube
        textColor="white"
        image={twitch}
        text="TWITCH"
        color="white"
        url="https://www.twitch.tv/bathinjan"
      />
      <Cube
        textColor="white"
        image={gmail}
        text="CONTACT"
        color="white"
        url="mailto:bathinjan@gmail.com"
      />
      <Cube
        textColor="white"
        image={github}
        text="GITHUB"
        color="white"
        url="https://github.com/Bathinjan"
      />
      <Cube
        textColor="white"
        image={artstation}
        text="ARTSTATION"
        color="white"
        url="https://www.artstation.com/bathinjan"
      />
    </div>
  );
}
