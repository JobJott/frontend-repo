import React, { useState } from 'react'
import './styles/CheveronList.css'
const CheveronList = () => {
  const [timesClicked, setTimesClicked] = useState(0)
  const handleTimesClicked = () => {
    setTimesClicked((prevTimesClicked) => {timesClicked +1})
  }
  return (
    <>
    <div className="cheveron-container">
        <div className="cheveron-container">
          <div className="cheveron">
            <div className="checkClick">--</div>
            <div className="status">Bookmarked</div>
          </div>
          <div className="cheveron">
            <div className="checkClick">--</div>
            <div className="status">Applying</div>
          </div>
          <div className="cheveron">
            <div className="checkClick">--</div>
            <div className="status">Applied</div>
          </div>
          <div className="cheveron">
            <div className="checkClick">--</div>
            <div className="status">Interviewing</div>
          </div>
          <div className="cheveron">
            <div className="checkClick">--</div>
            <div className="status">Negotiating</div>
          </div>
          <div className="cheveron">
            <div className="checkClick">--</div>
            <div className="status">Accepted</div>
          </div>
        </div> 
    </div>
    </>
  )
}

export default CheveronList