import React from 'react'

const BoxBreakExample = () => {
  return (
    <div className='p-10 bg-gray-100'>
        {/*Box Decoration with slice */}
        <h2 className='text-2xl font-bold mb-4'>Box decoration with slice</h2>
        <div className='inline bg-blue-500 text-white p-4 rounded-lg border border-blue-600 box-decoration-slice'>
        This text has a background and border that slices across multiple lines without repeating when it breaks into a new line.
        </div>
         {/*Box Decoration with clone */}
         <h2 className='text-2xl font-bold mt-8 mb-4'>Box Decoration with clone</h2>
         <div className='inline bg-green-500 text-white p-4 rounded-lg border border-green-600 box decoration-clone'>
         This text has a background and border that is cloned for each line when it breaks into multiple lines, giving each fragment its own decoration. 
         </div>
         

    </div>
  )
}

export default BoxBreakExample