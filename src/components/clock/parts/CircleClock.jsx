import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { TIMEACTION } from '../../time/reducers/TimeReducer';




function CircleClock(props) {


    const [time, setTime] = useState(0);

    useEffect(()=>{
        props.init();
        setTime(props.time.currentTime);
        setInterval(()=>{
            props.update();
            setTime(props.time.currentTime);

        },1000)
    },[]);


  return (
    <div className="clock absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 ">
        <div className=' w-96 h-96 rounded-full p-10 bg-white text-black relative'>
          <div className="content absolute  flex flex-col justify-center gap-2 items-center bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 ">
            <p>Sunday, 17, March</p>
            <h2 className='text-3xl font-extrabold'>{time}</h2>
            <h5>Morocco, Agadir</h5>
          </div>
          
        </div>
      </div>
  )
}

const CircleClockStore = connect(
    (state)=>({time : state.time}),
    dispatch => ({
        init : ()=>dispatch({type:TIMEACTION.init}),
        update : ()=>dispatch({type:TIMEACTION.update})
    }))(CircleClock)

export default CircleClockStore