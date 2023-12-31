import React from 'react'

function Spinner() {
  return (
    <div className='flex flex-col space-y-2 items-center'>
        <div className="spinner"></div>
        <p className='text-bgDark text-lg font-semibold'>Loading</p>
    </div>
  )
}

export default Spinner