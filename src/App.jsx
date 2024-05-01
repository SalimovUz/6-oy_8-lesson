import React from 'react'
import Sidebar from './Components/Sidebar'
import Tickets from './Components/Tickets'

const App = () => {
  return (
    <div className='flex'>
      <Sidebar/>
      <Tickets/>
    </div>
  )
}

export default App