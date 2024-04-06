import React from 'react'
import laptop from '../assets/laptop.jpg'
function Expert() {
  return (
    <div className='max-w-[1240px] p-2 mx-auto my-10  md:grid grid-cols-2'>
        <div className='col-span-1 md:w-[80%] w-[80%] mx-auto text-center'>
            <img src={laptop} alt="" />
        </div>
        <div className='col-span-1 flex flex-col justify-center gap-3'>
            <h1 className='font-bold text-justify'>LEARN FROM EXPERTS</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quasi amet iure, perferendis magni minus, architecto similique unde ipsum quidem ipsam nulla qui id nostrum cum labore veniam maxime rem iste tempora eligendi dolore rerum. Qui earum facere blanditiis corrupti necessitatibus? Blanditiis placeat ea praesentium. Doloremque tempora nesciunt nostrum cumque tempore nulla, labore perspiciatis, ad molestiae odit sit! At, reiciendis?</p>
            <button className='bg-black p-3 w-[30%] text-white rounded'>Get Started</button>
        </div>
    </div>
  )
}

export default Expert