//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";


function App(props) {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

    // Set state values for Lions state hook
    const [lionCount, setLionValue] = useState(0);
   // Set state values for Tigers state hook
    const [tigerCount, setTigerValue] = useState(0);

  // const for quarter button
  const [quarterCount, setQuarterValue] = useState(1); 

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{lionCount}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{tigerCount}</div>
          </div>
        </div>
        <BottomRow />
    <section className="buttons">
    <div className="homeButtons">
    {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
    <button className="homeButtons__touchdown" onClick={ () => setLionValue(lionCount + 7) }>Home Touchdown</button>
    <button className="homeButtons__fieldGoal" onClick={ () => setLionValue(lionCount + 3) }>Home Field Goal</button>
    </div>
    <div className="awayButtons">
    <button className="awayButtons__touchdown" onClick={ () => setTigerValue(tigerCount + 7) }>Away Touchdown</button>
    <button className="awayButtons__fieldGoal" onClick={ () => setTigerValue(tigerCount + 3) } >Away Field Goal</button>
    </div>
    <div className="awayButtons">
      <button className="qrt-btn" onClick={ () => setQuarterValue(quarterCount + 1) }>Quarter [+] </button>
    </div>
    </section>
      </section>
    </div>
  );
}

export default App;
