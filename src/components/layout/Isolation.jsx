import React from 'react'

const Isolation = () => {
  return (
    <div className='p-10 space-y-8 bg-gray-50 min-h-screen'>
        <h1 className='text-3xl font-bold mb-6'>Isolation</h1>

        <div className='relative bg-blue-100 p-4'>
            <h2 className='font-semibold mb-2'>.isolation-auto</h2>
            <div className='absolute top-9 left-0 rounded-lg bg-blue-500 text-white p-4'>I am positioned absolutely with `.isolation-auto`, so I may overlap other content.</div>
            <p className="relative z-10">
          This content may be overlapped by the absolutely positioned element because it does not create a new stacking context.
        </p>
        </div>


        <div className='relative bg-green-100 p-4 isolate'>
            <h2 className='font-semibold mb-2'>.isolate</h2>
            <div className='absolute top-9 left-0 bg-green-500 text-white p-4'>I am positioned absolutely with `.isolate`, so I have my own stacking context.</div>
            <p className="relative z-10">
          This content is isolated because the parent has `.isolate`, so it won't be overlapped by the absolutely positioned element.
        </p>
        </div>
    </div>
  )
}

export default Isolation