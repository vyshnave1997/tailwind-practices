import React from 'react'
import './App.css';
import Breakpoint from './components/Breakpoint';
import BoxBreakExample from './components/BoxBreakExample';
import ResponsiveContainer from './components/ResponsiveContainer';
import BoxSizing from './components/BoxSizing';
import Display from './components/Display';
import Float from './components/layout/Float';
import Clear from './components/layout/Clear';
import Isolation from './components/layout/Isolation';
import Objectfit from './components/layout/Objectfit';

import ObjectPosition from './components/layout/ObjectPosition';
const App = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-900'>
      <div className='p-8 bg-white shadow-lg rounded-lg'>
        <h1 className='text-4xl font-bold mb-4'>Hello Tailwind</h1>
        <p className='text-gray-600 text-center'>this is simple to learn</p>
        <Breakpoint />
        <BoxBreakExample />
        <ResponsiveContainer />
        <BoxSizing />
        <Display />
        <Float />
        <Clear />
        <Isolation />
        <Objectfit />
        <ObjectPosition />
        
      </div>
    </div>
  )
}

export default App