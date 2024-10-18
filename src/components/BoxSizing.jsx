import React from 'react'

const BoxSizing = () => {
  return (
    <div className='p-10 bg-gray-100 min-h-screen flex flex-col items-center justify-center space-y-8'>
        <h1 className='text-3xl font-bold mb-6'>
            Box Sizing 
        </h1>
        <div className='w-64 p-4 border-blue-500 bg-blue-100 text-blue-900 box-content'>
            <strong>content-box</strong>: The width is 256px, but padding and border are added outside of the width.
        </div>
        <div className='w-64 p-4 border-green-500 bg-green-100 text-green-900 box-border '>
            <strong>Border-box</strong>: the width is 256px, but padding and border are included within this width.
        </div>
    </div>
  )
}

export default BoxSizing