import React, { useState } from "react";
import { sample } from "lodash";

/**
 * EightBall Component <Button/>
 * Gives you a random message when clicked with a color associated with it
 *
 * State:
 * msg: "Think of a Question" (initially)
 * color: "black" (initially)
 *
 * Props:
 * answers: [{msg, color},...]
 */
function EightBall({ answers }) {
  const [msg, setMsg] = useState("Think of a Question");
  const [color, setColor] = useState("black");

  console.log("MESSAGE", msg);
  console.log("COLOR", color);

  function handleClick(evt) {
    console.log("HANDLE CLICK - I AM RUNNING");
    const randomMsgColor = sample(answers);
    setMsg(randomMsgColor.msg);
    setColor(randomMsgColor.color);
  }

  const stylesEightBall = {
    backgroundColor: color,
    maxHeight: "300px",
    height: "300px",
    maxWidth: "300px",
    width: "300px",
  };

  const stylesText = {
    fontSize: "20px",
    color: "white",
  };

  return (
    <button
      className="EightBall btn rounded-circle"
      onClick={handleClick}
      style={stylesEightBall}
    >
      <b style={stylesText}>{msg}</b>
    </button>
  );
}

export default EightBall;
