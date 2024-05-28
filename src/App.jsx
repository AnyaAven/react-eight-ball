import React from "react";
import "./App.css";
import EightBall from "./EightBall.jsx";
import { EIGHT_BALL_MSG_AND_COLORS } from "./constants.jsx";

/** Main App component
 *
 * App -> Eightball
*/
function App() {
  return (
    <div className="App">
      <EightBall answers={ EIGHT_BALL_MSG_AND_COLORS} />
    </div>
  );
}

export default App;
