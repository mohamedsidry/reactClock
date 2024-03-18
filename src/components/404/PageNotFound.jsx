import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <div className=' relative w-full h-screen bg-darkerGray text-white text-center'>
        <div className="content flex flex-col item-center justify-between gap-2 absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2">
            <h1 className='text-3xl font-bold text-red-500'>404</h1>
            <h2 className='text-2xl font-semibold'>PAGE NOT FOUND !</h2>
            <Link className='px-3 py-2 rounded-md bg-red-300 hover:bg-red-500' to={'/'}>BACK HOME</Link>
        </div>
    </div>
  )
}

export default PageNotFound