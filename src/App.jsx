
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import AlarmLayout from './components/alarms/AlarmLayout'
import TimerLayout from './components/timers/TimerLayout'
import CounterLayout from './components/counter/CounterLayout'
import PageNotFound from './components/404/PageNotFound'
import ClockLayout from './components/clock/ClockLayout'
import AppLayout from './components/AppLayout'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AppLayout/>}>
          <Route index element={<ClockLayout/>}/>
          <Route path='alarm' element={<AlarmLayout/>}/>
          <Route path='timer' element={<TimerLayout/>}/>
          <Route path='counter' element={<CounterLayout/>}/>
        </Route>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
