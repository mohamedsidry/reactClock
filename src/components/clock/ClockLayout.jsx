import React, {useEffect} from 'react'
import ActionBar from '../parts/actionbar/ActionBar'
import { Provider } from 'react-redux'
import TimeStore from '../store/TimeStore'
import CircleClockStore from './parts/CircleClock'

function ClockLayout() {



  return (

    
    <div className='clock-layout relative h-screen'>
      <ActionBar header={'World Clock'}></ActionBar>
      <Provider store={TimeStore}>
        <CircleClockStore/>
      </Provider>
      <div className="content">
        hehehehhehehh
      </div>
    </div>
    
  )
}

export default ClockLayout
