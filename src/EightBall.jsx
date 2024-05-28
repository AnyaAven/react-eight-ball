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
function EightBall({ answers }){
  const [msg, setMsg] = useState("Think of a Question");
  const [color, setColor] = useState("black");

  const randomMsgColor = sample(answers);

  function handleClick(evt){
    setMsg(randomMsgColor.msg)
    setColor(randomMsgColor.color)
  }

  return (
    <button className="EightBall" onClick={handleClick}>

    </button>
  )
}

export default EightBall;