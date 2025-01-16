import { useState } from 'react'
import '../index.css'
function DigitalClock() {
  let Time = new Date().toLocaleTimeString();
  const [currentTime, setCurrentTime] = useState(Time);

  function updateTime(){
   Time = new Date().toLocaleTimeString();
   setCurrentTime(Time)
  }

  setInterval(updateTime,1000)

  return (
    <>
      <div className='container'>
       <h1>{currentTime}</h1>
      </div>
    </>
  )
}

export default DigitalClock
