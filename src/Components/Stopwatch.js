import React, { useEffect, useState } from 'react'
import './Styles.css'
import stopwatch from '../stopwatch1.png'
import { Link } from 'react-router-dom'

const Stopwatch = () => {
    const [running, isRunning] = useState(false)
    const [time, setTime] = useState(0)

    function format(t){
        let hours = Math.floor((t/100/60/60)%24)
        let minutes = Math.floor((t/100/60)%60)
        let seconds = Math.floor((t/100)%60)
        let milliseconds = Math.floor(t%100)
        hours=String(hours).padStart(2,'0')
        minutes=String(minutes).padStart(2,'0')
        seconds=String(seconds).padStart(2,'0')
        milliseconds=String(milliseconds).padStart(2,'0')
        return `${hours}:${minutes}:${seconds}:${milliseconds}`
    }

    useEffect(()=>{
        let interval = null
        if(running){
            interval = setInterval(()=>{
                setTime(t=>t+1)
            },10)
        }
        else{
            clearInterval(interval)
        }
        return ()=>clearInterval(interval)
    },[running])

  return (
    <div ><br/>
      <center>
            <h1>{format(time)}</h1>
            <div className='stopwatch'>
            <button onClick={()=>isRunning(true)} className='button' style={{margin:'5%'}}>Start</button>
            <button onClick={()=>isRunning(false)} className='button' style={{margin:'5%'}}>Stop</button>
            <button onClick={()=>setTime(0)} className='button' style={{margin:'5%'}}>Reset</button>
        </div>
        <img src={stopwatch} alt='Stop Watch' height={250} width={250} className='watchimage' title='Stop Watch'/>
      </center>
      <div className='displaying'>
        <Link style={{textDecoration:'none'}} className='button1' to='/'>Clock</Link>
        <Link style={{textDecoration:'none'}} className='button1' to='/Timer'>Timer</Link>
      </div>
    </div>
  )
}

export default Stopwatch
