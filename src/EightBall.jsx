import React, { useState } from "react";
import { sample } from "lodash";
import "./EightBall.css"

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
  const [answer, setAnswer] = useState(
    {msg:"Think of a Question", color:"black" }
  );

  function handleClick(evt) {
    const randomAnswer = sample(answers);
    setAnswer({...randomAnswer});
  }

  const stylesEightBall = {
    backgroundColor: answer.color,
  };

  return (
    <button
      className="EightBall btn rounded-circle"
      onClick={handleClick}
      style={stylesEightBall}
    >
      <b className="Eightball-text">{answer.msg}</b>
    </button>
  );
}

export default EightBall;
