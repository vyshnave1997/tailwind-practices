import React from 'react'

const Float = () => {
  return (
    <div className='p-10 space-y-8 bg-gray-50'>
        <h1 className='text-3xl font-bold mb-6'> Float</h1>
        <div className='bg-blue-100 p-4'>
            <h2 className='font-semibold mb-2'> .float-left</h2>
            <div className='float-left bg-blue-600 text-white p-4 mr-4'>float right</div>
            <p>
          This is some text that wraps around the floated element. The content
          flows next to the floated element. The floated element will stay on
          the left side of its container, and the rest of the content will wrap
          around it.
        </p>
        <div className='clear-both'></div>
        </div>

        <div className='bg-green-100 p-4'>
            <h2 className='font-semibold'>float-right</h2>
            <div className='float-right bg-green-500 text-white p-4 ml-4'>float-right</div>
            <p>
          This is some text that wraps around the floated element. The content
          flows next to the floated element. The floated element will stay on
          the right side of its container, and the rest of the content will wrap
          around it.
        </p>
        <div className="clear-both"></div>
        </div>
        <div className='bg-yellow-100 p-4'>
            <h2 className='font-semibold mb-2'>.float-none</h2>
            <div className='float-none bg-yellow-500 text-white p-4'>   I have no float, so I remain in the document flow.</div>
            <p>
          This is some text that does not wrap around the element because there
          is no floating applied. The element stays in its natural flow
          position.
        </p>
        </div>
    </div>
  )
}

export default Float