// CSS
import "./App.css";

// ThreeJS Imports
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

// Components
import Logo from "./components/Logo";
import Planet from "./components/Planet";
import Cube from "./components/SpecialCube";
import About from "./components/About";
import Footer from "./components/Footer";

// Images
import twitter from "./images/twitter.png";
import twitch from "./images/twitch.png";
import soundcloud from "./images/soundcloud.png";
import gmail from "./images/gmail.png";
import artstation from "./images/artstation.png";
import github from "./images/github-w.png";

// Post-Processing Effects
import {
  Bloom,
  ChromaticAberration,
  DepthOfField,
  EffectComposer,
  Vignette,
  Scanline,
  Grid,
  Noise,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

export default function App() {
  return (
    <div className="parent">
      <Canvas>
        {/* Load another ThreeJS component during loading time */}
        <Suspense fallback={null}>
          <Planet />
        </Suspense>
        <EffectComposer>
          <DepthOfField
            focusDistance={1}
            focalLength={0.02}
            bokehScale={2}
            height={480}
          />
          <ChromaticAberration
            offset={[0.001, 0.001]} // color offset
          />
          <Bloom
            luminanceThreshold={0.5}
            luminanceSmoothing={0.9}
            height={300}
          />
          <Vignette eskil={false} offset={0.1} darkness={1.1} />
          <Scanline
            blendFunction={BlendFunction.OVERLAY} // blend mode
            density={1} // scanline density
          />
          <Grid
            blendFunction={BlendFunction.OVERLAY} // blend mode
            scale={1.0} // grid pattern scale
            lineWidth={0.0} // grid pattern line width
            // size={{ width, height }} // overrides the default pass width and height
          />
          <Noise premultiply blendFunction={BlendFunction.ADD} />
        </EffectComposer>
      </Canvas>
      <Logo />
      <About />
      <Footer />
      <Cube
        bottom={1000}
        left={800}
        textColor="white"
        image={twitter}
        text="TWITTER"
        color="white"
        url="https://twitter.com/bathinjan_"
      />
      <Cube
        bottom={800}
        left={1600}
        textColor="white"
        image={twitch}
        text="TWITCH"
        color="white"
        url="https://www.twitch.tv/bathinjan"
      />
      <Cube
        bottom={200}
        left={2000}
        textColor="white"
        image={soundcloud}
        text="SOUNDCLOUD"
        color="white"
        url="https://soundcloud.com/bathinjan"
      />
      <Cube
        bottom={200}
        left={400}
        textColor="white"
        image={gmail}
        text="CONTACT"
        color="white"
        url="mailto:bathinjan@gmail.com"
      />
      <Cube
        bottom={650}
        left={200}
        textColor="white"
        image={github}
        text="GITHUB"
        color="white"
        url="https://github.com/Bathinjan"
      />
      <Cube
        bottom={350}
        left={1700}
        textColor="white"
        image={artstation}
        text="ARTSTATION"
        color="white"
        url="https://www.artstation.com/bathinjan"
      />
    </div>
  );
}
