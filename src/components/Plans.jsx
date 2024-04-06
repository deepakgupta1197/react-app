import React from 'react'
import Plan from './Plan'

function Plans() {
  return (
    <div className='p-2 flex flex-wrap gap-5 justify-center py-5'>
        <Plan name='Computing'/>
        <Plan name='Programming'/>
        <Plan name='Data science'/>
    </div>
  )
}

export default Plans