import React from 'react'

const Breakpoint = () => {
  return (
    <div className='p-4 flex flex-col lg:flex-row bg-white rounded-lg shadow-lg'>
        {/* Image section */}
        <div className='lg:w-1/3'>
        <img src="https://placeholder.com/150" 
        alt="placeholder" 
        className='w-full h-auto rounded-lg'/>
        </div>
        {/*content section */}
        <div className='lg:w-2/3 lg:ml-6 mt-4 lg:mt-0'>
        <h2 className='text-2xl font-bold text-gray-900'>Responsive card</h2>
        <p className='text-gray-700 mt-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br /> Minima, in. Consectetur quae maxime si</p>
        <button className='mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600'>Learn more</button>
        <p className='text-gray-700 mt-2'>.</p>
        </div>
    </div>
  )
}

export default Breakpoint