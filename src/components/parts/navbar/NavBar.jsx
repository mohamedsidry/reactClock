import React from 'react'
import NavLink from './NavLink'

import worldClockIcon   from './../../../assets/icons/world-clock.svg'
import alarmIcon  from './../../../assets/icons/alarm.svg'
import stopwatchIcon  from './../../../assets/icons/stopwatch.svg'
import timerIcon  from './../../../assets/icons/timer.svg'


function NavBar() {
  return (
    <nav className=' fixed bottom-0 py-3 bg-lightGray w-full  rounded-t-3xl z-50'>
        <ul className=' flex justify-center items-center gap-2 sm:gap-5  md:gap-10 text-nowrap'>

            <NavLink param = {{active:true,text : 'World Clock', icon: worldClockIcon, to: '/'}}/>
            <NavLink param = {{active:true,text : 'Alarms', icon: alarmIcon, to: 'alarm'}}/>
            <NavLink param = {{active:true,text : 'StopWatch', icon: stopwatchIcon, to: 'counter'}}/>
            <NavLink param = {{active:true,text : 'Timers', icon: timerIcon, to: 'timer'}}/>
            
        </ul>
    </nav>
  )
}

export default NavBar