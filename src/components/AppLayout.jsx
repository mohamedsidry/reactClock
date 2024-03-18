import React, { useEffect, useReducer, useState } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './parts/navbar/NavBar'


function AppLayout() {

    //const [state, dispatch] = useReducer(TimeReducer,{time : {currentTime : getCurrentTime('h+m')}});

    

    useEffect(()=>{
      
    },[])
    

    
   
  return (
    
    <div className='app-layout relative w-full h-svh bg-darkerGray'>
            <NavBar/>
            <Outlet/>   
    </div>
  )
}


export default AppLayout