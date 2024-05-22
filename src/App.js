import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Clock from './Components/Clock'
import Stopwatch from './Components/Stopwatch'
import Timer from './Components/Timer'

const App = () => {
  return (
    <div>
      <center>
        <h1 className='heading'>Clock</h1>
      </center>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Clock/>}/>
          <Route path='/*' element={<center><h2>Page Not Found</h2></center>} />
          <Route path='/StopWatch' element={<Stopwatch/>} />
          <Route path='/Timer' element={<Timer/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
