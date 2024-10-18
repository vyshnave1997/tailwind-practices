import React from 'react'

const Clear = () => {
  return (
    <div className='p-10 space-y-8 bg-gray-50'>
        <h1 className='text-3xl font-bold mb-6'>.clear</h1>

        <div className='bg-blue-100 p-4'>
            <h2 className='font-semibold mb-2'>.clear-left</h2>
            <div className='float-left bg-blue-500 text-white p-4 mr-4'>i am floating left</div>
            <p>
          This is some text that wraps around the floated element. The next
          element is cleared on the left side.
        </p>
        <div className='clear-left bg-blue-300 text-white p-4 mt-4'>
        I am cleared on the left side, so I start below the floated element.
        </div>
        </div>

        <div className='bg-green-100 p-4'>
            <h2 className='font-semibold mb-2'>.clear-right</h2>
            <div className='float-right bg-green-500 text-white p-4 ml-4'>i am float right</div>
            <p>
          This is some text that wraps around the floated element. The next
          element is cleared on the right side.
        </p>
        <div className='clear-right bg-green-300 text-white p-4 mt-4'>I am cleared on the right side, so I start below the floated element.</div>
        </div>

        <div className='bg-yellow-100 p-4'>
            <h2 className='font-semibold mb-2'>.clear-both</h2>
            <div className='float-left bg-yellow-500 text-white p-4 mr-5'>float left</div>
            <div className='float-right bg-yellow-500 text-white p-4 ml-4'>float right</div>
            <p>
          This is some text that wraps around the floated elements. The next
          element is cleared on both sides.
        </p>
        <div className='clear-both bg-yellow-300 text-white p-4 mt-4'> I am cleared on both sides, so I start below both floated elements.</div>
        </div>

        <div className='bg-red-100 p-4'>
            <h2 className='font-semibold mb-2'>.clear-none</h2>
            <div className='float-left bg-red-500 text-white p-4 mr-4'> float-left</div>
            <p>
          This is some text that wraps around the floated element. The next
          element has no clearing applied.
        </p>
        <div className="clear-none bg-red-300 text-white p-4 mt-4">
          I have no clearing applied, so I stay in the normal flow next to the
          floated element.
        </div>
        </div>
    </div>
  )
}

export default Clear