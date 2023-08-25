//! Below may be deprecated, but the updated property doesn't properly set encoding like old one
import { sRGBEncoding } from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useRef } from "react";
import { TextureLoader } from "three/src/loaders/TextureLoader";

// Convert degrees to radians
const angleToRadians = (angleInDegrees) => {
  return (Math.PI / 180) * angleInDegrees;
};

export default function Planet() {
  // Reference to Orbit Controls / Sphere
  const orbitControlsRef = useRef(null);
  const sphereRef = useRef(null);

  // Create new texture loader
  const loader = new TextureLoader();

  // Load alpha map
  const alpha = loader.load("../images/cookie4.png");

  // Load color map
  const color = loader.load("../images/rainbownebula.jpg");

  // Create and load background texture
  const backgroundTex = loader.load("../images/space2.jpg");
  // Prevent image from being washed out (use sRGB encoding)
  backgroundTex.encoding = sRGBEncoding;
  // Set background texture as background image
  const { scene } = useThree();
  scene.background = backgroundTex;

  // Gives access to frames (runs at consistent frame rate of machine)
  useFrame((state) => {
    // If the orbitcontrols reference is not null,
    if (!!orbitControlsRef.current) {
      // destructure the normalized x and y values of pointer / mouse
      const { x, y } = state.mouse;
      // Set azimuthal angle (horizontal) to x value (negative value tracks mouse / reverses angle)
      orbitControlsRef.current.setAzimuthalAngle(-x * angleToRadians(15));
      // Set polar angle (vertical) to y value
      orbitControlsRef.current.setPolarAngle((y + 5.5) * angleToRadians(13));
      // Update camera to inform of changes
      orbitControlsRef.current.update();
    }
  });

  return (
    <>
      {/* Camera Override :: Default origin is at 0,0,0 */}
      <PerspectiveCamera makeDefault position={[0, 0, 20]} />
      <OrbitControls
        ref={orbitControlsRef}
        minPolarAngle={angleToRadians(60)}
        maxPolarAngle={angleToRadians(80)}
      />
      {/* Create Sphere */}
      <mesh position={[0, 0, 0]} rotation={[0, 4.1, 0]}>
        {/* Geometry */}
        <sphereGeometry args={[6, 16, 16]} ref={sphereRef} />
        {/* Material */}
        <meshStandardMaterial
          alphaMap={alpha}
          transparent={true}
          opacity={0.3}
          roughness={0.5}
          metalness={0.5}
          flatShading={false}
          wireframe={false}
          emissive={"skyblue"}
          emissiveIntensity={11}
          toneMapped={false}
          emissiveMap={color}
        />
      </mesh>
      {/* Lights */}
      <ambientLight args={["white", 0.5]} />
      <directionalLight args={["white", 1]} />
    </>
  );
}
