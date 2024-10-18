import React from 'react'

const ResponsiveContainer = () => {
  return (
    <div className='bg-gray-100 min-h-screen flex items-center justify-center'>
        <div className='container mx-auto p-4 bg-white rounded-lg shadow-lg'>
            <h1 className='text-4xl font-bold text-center mb-4' >
                Responsive Container
            </h1>
            <p className='text-gray-700 text-center mb-4'>
                the container adapts its max-width based on current breakpoint
            </p>

            <div className='space-y-4'>
                <div className='bg-blue-500 text-white p-4 rounded-lg'>
                    <strong>Small screen (sm):</strong> max-width is 640px.
                </div>
                <div className='bg-green-500 text-white p-4 rounded-lg'>
                    <strong>Medium screen (md):</strong>max-width is 768px.
                </div>
                <div className='bg-yellow-500 text-white p-4 rounded-lg'>
                <strong>Large screen (lg):</strong>max-width is 1024px.
                </div>
                <div className='bg-purple-500 text-white p-4 rounded-lg'>
                    <strong>Extra large screen (xl):</strong>max-width is 1280px.
                </div>
                <div className='bg-red-500 text-white p-4 rounded-lg'>
                    <strong>2X large Screen (2xl):</strong>max-width is 1536px.
                </div>
            </div>
        </div>
    </div>
  )
}

export default ResponsiveContainer