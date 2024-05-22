import React from "react";
import { useState } from "react";
import "./Styles.css";
import { Link } from "react-router-dom";

const Clock = () => {
  const [time, setTime] = useState("");
  const [hours,setHours] = useState('')
  const [mins, setMins] = useState('')
  const [secs, setSecs] = useState('')
  const updateTime = () => {
    let newTime = new Date();
    setHours(newTime.getHours())
    setMins(newTime.getMinutes())
    setSecs(newTime.getSeconds())
    setTime(newTime.toLocaleTimeString());
  };
  setInterval(updateTime, 1000);
  return (
    <div>
      <div className="clock">
        <div
          className="hour_hand"
          style={{
            transform: `rotateZ(${
              hours * 30 +
              (mins / 60) * 30
            }deg)`,
          }}
        />
        <div
          className="min_hand"
          style={{ transform: `rotateZ(${mins * 6}deg)` }}
        />
        <div
          className="sec_hand"
          style={{ transform: `rotateZ(${secs * 6}deg)` }}
        />
        <span className="tweleve">12</span>
        <span className="one">1</span>
        <span className="two">2</span>
        <span className="three">3</span>
        <span className="four">4</span>
        <span className="five">5</span>
        <span className="six">6</span>
        <span className="seven">7</span>
        <span className="eight">8</span>
        <span className="nine">9</span>
        <span className="ten">10</span>
        <span className="eleven">11</span>
      </div>
      <br />
      <div className="displaying">
          <Link to='/StopWatch' style={{textDecoration:'none'}}><button className="button">Stopwatch</button></Link>
          <Link to='/Timer' style={{textDecoration:'none'}}><button className="button">Timer</button></Link>
        </div>
      <br />
      <br />
      <br />
      <div>
        {time ? (
          <center>
            <h3>{time}</h3>
          </center>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Clock;
