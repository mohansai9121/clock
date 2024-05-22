import React, { useEffect, useState } from "react";
import './Styles.css'
import { Link } from "react-router-dom";
import timer from '../timer.png'

const Timer = () => {
  const [time, setTime] = useState(0);
  const [minutes, setMinutes] = useState('');
  const [timerOn, setTimerOn] = useState(false);
  function format(time) {
    let hours = Math.floor(time / 60 / 100 / 60);
    let seconds = Math.floor((time / 100) % 60);
    let mins = Math.floor((time / 100 / 60) % 60);
    let milliseconds = Math.floor(time % 100);
    mins = String(mins).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");
    hours = String(hours).padStart(2, "0");
    return `${hours}:${mins}:${seconds}:${milliseconds}`;
  }
  useEffect(() => {
    setTime(minutes * 60 * 100);
  }, [minutes]);
  useEffect(() => {
    let interval = null;
    if (timerOn && time > 0) {
      interval = setInterval(() => {
        setTime((t) => t - 1);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerOn, time]);
  return (
    <div><br/>
      <center>
        <h1>{format(time)}</h1>
        <br />
        <input
        className="input"
          type="number"
          value={minutes}
          placeholder="Enter minutes..."
          onChange={(e) => setMinutes(e.target.value)}
        />
        <div>
          <button
          className="button1"
            onClick={() => {
              setTimerOn(true);
            }}
          >
            Start
          </button>
          <button
          className="button1"
            onClick={() => {
              setTimerOn(false);
            }}
          >
            Stop
          </button>
          <button
          className="button1"
            onClick={() => {
              setMinutes('');
            }}
          >
            Reset
          </button>
        </div>
        <img src={timer} alt="Timer" style={{backgroundColor:'white'}} title="Timer" className="watchimage"/>
      </center>
      <div className='displaying'>
        <Link style={{textDecoration:'none'}} className='button1' to='/'>Clock</Link>
        <Link style={{textDecoration:'none'}} className='button1' to='/StopWatch'>Stop Watch</Link>
      </div>
    </div>
  );
};

export default Timer;
