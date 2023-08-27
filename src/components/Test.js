// Component for testing some hooks functionality
import { useState, useEffect } from "react";

export default function Test() {
  function getRandomNumber(max) {
    return Math.floor(Math.random() * (max + 1));
  }
  const [nX, setNX] = useState(window.innerWidth / 2);
  const [nY, setNY] = useState(window.innerHeight / 2);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log(`x value: ${nX}`);
      setNX(() => {
        return getRandomNumber(window.innerWidth);
      });
    }, 20000);

    return () => {};
  }, [nX, window.innerWidth, window.innerHeight]);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log(`y value: ${nY}`);
      setNY(() => {
        return getRandomNumber(window.innerHeight);
      });
    }, 20000);

    return () => {};
  }, [nY, window.innerWidth, window.innerHeight]);

  return <div className="a" style={{ left: `${nX}px`, top: `${nY}px)` }}></div>;
}
