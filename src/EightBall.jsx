import React, { useState } from "react";

/**
 * EightBall Component
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


}

export default EightBall;