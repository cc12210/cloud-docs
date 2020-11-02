import { useState, useEffect } from "react";

const UseKeyPress = (targetKeyCode) => {
  const [keyPress, setKeyPress] = useState(false);
  const keyDownHandler = ({ keyCode }) => {
    if (keyCode === targetKeyCode) {
      setKeyPress(true);
    }
  };
  const keyUpHandler = ({ keyCode }) => {
    if (keyCode === targetKeyCode) {
      setKeyPress(false);
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", keyDownHandler);
    document.addEventListener("keyup", keyUpHandler);
    return () => {
      document.removeEventListener("keydown", keyDownHandler);
      document.removeEventListener("keyup", keyUpHandler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return keyPress;
};

export default UseKeyPress;
