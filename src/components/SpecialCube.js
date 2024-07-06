import { useState, useLayoutEffect } from "react";

export default function SpecialCube(props) {
  //* Return a random number from 0 to N
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  // Initialize State for X and Y
  const [nX, setNX] = useState(window.innerWidth / 2 - 70);
  const [nY, setNY] = useState(window.innerHeight / 2);

  // ? Note:  60, 120 and 240 are trial-and-error values for resized cubes to stay within the screen

  // Move X value randomly using Effect hook
  useLayoutEffect(() => {
    const timer = setTimeout(() => {
      setNX(() => {
        return getRandomNumber(60, window.innerWidth - 240); // 240
      });
    }, getRandomNumber(7000, 10000)); //7000, 10000

    return () => {};
  }, [nX, window.innerWidth]); // handle ease-in-out in CSS

  // Move Y value randomly using Effect hook
  useLayoutEffect(() => {
    const timer = setTimeout(() => {
      setNY(() => {
        return getRandomNumber(120, window.innerHeight - 240); // 240
      });
    }, getRandomNumber(7000, 10000)); //7000, 10000

    return () => {};
  }, [nY, window.innerHeight]);

  return (
    <a
      href={props.url}
      target="#"
      id="a"
      style={{ left: `${nX}px`, bottom: `${nY}px` }}
    >
      <div className="box-container" id="box">
        <div className="box--text" style={{ color: props.textColor }}>
          {props.text}
        </div>
        <hr className="box--line" style={{ color: props.textColor }}></hr>
        <img
          className="box--image"
          src={props.image}
          alt={`${props.text} logo`}
        ></img>
        <div className="box-area">
          <div
            className="box"
            style={{ border: `5px solid ${props.color}` }}
            id="box-front"
          ></div>
          <div
            className="box"
            style={{ border: `5px solid ${props.color}` }}
            id="box-right"
          ></div>
          <div
            className="box"
            style={{ border: `5px solid ${props.color}` }}
            id="box-back"
          ></div>
          <div
            className="box"
            style={{ border: `5px solid ${props.color}` }}
            id="box-left"
          ></div>
          <div
            className="box"
            style={{ border: `5px solid ${props.color}` }}
            id="box-top"
          ></div>
          <div
            className="box"
            style={{ border: `5px solid ${props.color}` }}
            id="box-bottom"
          ></div>
        </div>
      </div>
    </a>
  );
}
