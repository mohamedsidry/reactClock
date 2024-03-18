import React, { useContext } from 'react'
import plusIcon from  '../../../assets/icons/plus.svg'
import { TimeContext } from '../../time/contexts/TimeContext'

function ActionBar({header}) {
  const context = useContext(TimeContext);

  return (
    <div className='action-bar fixed top-0 w-full p-5 bg-darkGray rounded-b-3xl z-50'>
        <div className="actions flex items-center justify-between text-primaryBlue font-semibold">
            <button id='btnEdit' title='button edit'>Edit</button>
            <button id='btnPlus' title='button add'><img className='w-5 h-5' src={plusIcon} alt="" /></button>
        </div>
        <p>{context.currentTime}</p>
        <h1 className='text-3xl font-semibold text-white'>{header}</h1>
    </div>
  )
}

export default ActionBar