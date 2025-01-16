import { useState } from "react";
import "../index.css"
function StopWatch(){
    //const[time,setTime] = useState();

    let HH = 10;
    let MM = 40;
    let S = 0;

    let time = HH+':'+MM+':'+S;
    
    function start()
    {
        alert(typeof(time));// we need to convert string into integer before starting
    }

    function stop()
    {}

    function reset()
    {}
  return(
    <>
    <h2>Stop Watch</h2>
    <div className="stop-watch-container">
    <button onClick={start}>Start</button>
    <button onClick={stop}>Stop</button>
    <button onClick={reset}>Reset</button>
    </div>
    </>
  )
}
export default StopWatch;