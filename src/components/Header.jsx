import React from 'react'

function Header() {
  return (
    <div className='bg-[#2699fb] p-4'>
        <div className='max-w-[1240px] items-center mx-auto flex justify-between'>
            <div className='text-3xl font-bold'>
                Tech
            </div>
            <ul className=' flex gap-10 text-white'> 
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Header