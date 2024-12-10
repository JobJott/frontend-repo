import React from 'react'
import CheveronList from './CheveronList'
import Utils from './Utils'

const MainBoard = () => {
  return (
    <>
    <div className="mainboard-container" style={{padding: '20px'}}>
    <CheveronList/>
    <Utils />
    </div>
   
    </>
  )
}

export default MainBoard