import React from 'react'
import MainBoard from './MainBoard'
import SideDash from './SideDash'

const Dashboard = () => {
  return (
    <>
    <div className="container" style={{display:'flex', justifyContent: 'space-between', width: '100'}}>
        <h1><SideDash/></h1>
        <h1><MainBoard/></h1>
    </div>
    </>
  )
}

export default Dashboard