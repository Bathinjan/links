import { useState, useLayoutEffect } from "react";
import styled from "styled-components";

// -------------- STYLED COMPONENT --------------- //
//? For greater control over box sizing
const boxSize = 125;
const boxSizeSmall = 80;
const BoxFront = styled.div`
  transform: translateZ(-${boxSize}px);
`;
const BoxBack = styled.div`
  transform: translateZ(${boxSize}px);
`;
const BoxBottom = styled.div`
  transform: translateY(-${boxSize}px) rotateX(90deg);
`;
const BoxTop = styled.div`
  transform: translateY(${boxSize}px) rotateX(90deg);
`;
const BoxLeft = styled.div`
  transform: translateX(-${boxSize}px) rotateY(90deg);
`;
const BoxRight = styled.div`
  transform: translateX(${boxSize}px) rotateY(90deg);
`;
// --------------------------------------------- //

export default function Tilter(props) {
  // Initialize State for mouse position
  const [mousePosition, setMousePosition] = useState({
    x: 0.0,
    y: 0.0,
  });

  // Initialize State for middle of screen position
  const [middleScreen, setMiddleScreen] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  // Initialize State for offset (x, y of mouse - window specs / 2)
  const [offset, setOffset] = useState({
    x: mousePosition.x - middleScreen.x,
    y: mousePosition.y - middleScreen.y,
  });

  // console.log(`Offset positions in state: x = ${offset.x}, y = ${offset.y}`);

  //* Effect hooks:

  // Update x,y of mouse when mouse moves
  useLayoutEffect(() => {
    const updateMousePosition = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, [mousePosition.x, mousePosition.y]);

  // Update the offset values when the mouse moves
  useLayoutEffect(() => {
    const updateOffset = (event) => {
      setOffset({
        x: ((event.clientX - middleScreen.x) / middleScreen.x) * 38, // Normalizing values; clamping degree max
        y: ((event.clientY - middleScreen.y) / middleScreen.y) * 38, // Normalizing values; clamping degree max
      });
    };

    window.addEventListener("mousemove", updateOffset);

    return () => {
      window.removeEventListener("mousemove", updateOffset);
    };
  }, [middleScreen.x, middleScreen.y]);

  // Update the middle of screen values on resize
  useLayoutEffect(() => {
    const updateMiddleScreen = (event) => {
      setMiddleScreen({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    };

    window.addEventListener("resize", updateMiddleScreen);

    return () => {
      window.removeEventListener("resize", updateMiddleScreen);
    };
  }, [middleScreen.x, middleScreen.y]);

  return (
    <div className="tilter">
      <img
        className="tilter--background--image"
        src={props.imgsource}
        alt="stacked emissive wireframe cubes where I forgor to apply bevel so v sharp"
      ></img>
      <div
        className="tilter--box--area"
        style={{
          transform: `rotateX(${-offset.y}deg) rotateY(${offset.x}deg)`,
          transformOrigin: `center`,
        }}
      >
        <BoxFront className="tilter--box" id="box--tilt-front"></BoxFront>
        <BoxRight className="tilter--box" id="box--tilt-right"></BoxRight>
        <BoxBack className="tilter--box" id="box--tilt-back"></BoxBack>
        <BoxLeft className="tilter--box" id="box--tilt-left"></BoxLeft>
        <BoxTop className="tilter--box" id="box--tilt-top"></BoxTop>
        <BoxBottom className="tilter--box" id="box--tilt-bottom"></BoxBottom>
      </div>
    </div>
  );
}
