import React from 'react'

const Display = () => {
  return (
    <div className='p-10 space-y-8 bg-gray-50'>
        <h1 className='text-3xl font-bold mb-6'>Tailwind Display</h1>

        <div>
            <h2 className='font-semibold'>.hidden</h2>
            <div className='hidden bg-gray-200 p-4'>You can't see me!</div>
        </div>

        <div>
            <h2 className='font-semibold'>.block</h2>
            <div className='block bg-blue-200 p-4'>I am a block element</div>
        </div>

        <div>
            <h2 className='font-semibold'>.inline-block</h2>
            <div className='inline-block bg-green-200 p-4'> I am inLine block element</div>
        </div>
        <div>
            <h2 className='font-semibold'>.Inline</h2>
            <span className='flex bg-yellow-200 p-4 mb-5'>I am inline element.</span>
            <span className='inline bg-yellow-300 p-4 '>Another inline element</span>
        </div>

        <div>
            <h2 className='font-semibold'>.flex</h2>
            <div className='flex bg-purple-200 p-4 space-x-4'>
                <div className='bg-purpule-400 p-2'>Flex item 1</div>
                <div className='bg-purple-500 p-2'>Flex item 2</div>
            </div>
        </div>

        <div>
            <h2 className='font-semibold'>.inline-flex</h2>
            <div className='inline-flex bg-pink-200 p-4 space-x-4'>
                <div className='bg-pink-400 p-2'>inline-flex item 1</div>
                <div className='bg-pink-500 p-2'>inline-flex item 2</div>
            </div>
        </div>

        <div>
            <h2 className='font-semibold'>.table and related utilites</h2>
            <div className='table bg-gray-200'>
                <div className='table-header-group bg-gray-300 p-2'>Table header</div>
                <div className='table-row-group'>
                    <div className='table-row'>
                        <div className='table-cell p-2 border'>Row 1, cell 1</div>
                        <div className='table-cell p-2 border'> Row 1, cell 2</div>

                    </div>
                    <div className='table-row'>
                        <div className='table-cell p-2 border bg-gray-700'>Row 2, cell 1</div>
                        <div className='table-cell p-2 border bg-gray-700'>Row 2, cell 2</div>
                    </div>
                </div>
                <div className='table-footer-group bg-gray-400 p-4'>Table Footer</div>
            </div>
        </div>

        <div>
            <h2 className='font-semibold'>.flow-root</h2>
            <div className='flow-root bg-indigo-200 p-4'>
                This is a flow-root container
            </div>
            <div className='float-left bg-indigo-400 p-2'>i am floated left</div>
            <div className='float-right bg-indigo-500 p-2'>i am floating right</div>
        </div>

        <div>
            <h2 className="font-semibold">.inline-grid</h2>
            <div className='inline-grid grid-cols-2 gap-4 bg-red-200 p-4'>
                <div className='bg-red-400 p-2'>
                    inline-grid item-1
                </div>
                <div className='bg-red-500 p-2'>inline-grid item-2</div>
            </div>
        </div>

        <div>
            <h2 className='font-semibold'> .content</h2>
            <div className='contents'>
                <div className='bg-gray-300 p-2'>i behave as contents</div>
                <div className='bg-gray-400 p-2'> contents elements</div>
            </div>
        </div>

        <div>
            <h2 className='font-semibold'>.list</h2>
            <ul className='list-disc pl-6'>
                <li className='list-item bg-gray-100 p-2'> list item 1</li>
                <li className='list-item bg-gray-200 p-2'>list item 2</li>
            </ul>
        </div>

    </div>
  )
}

export default Display