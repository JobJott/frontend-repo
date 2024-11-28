import React from 'react'
import '../styles/Testimonials.css'
import Services_Data from '../assets/services_data'
import theme_pattern from '../assets/theme_pattern.svg'
import arrow_icon from '../assets/arrow_icon.svg'






const Testimonials = () => {
  return (
    <div className='services'>
        
        <div className="services-title">
            <h1>Testimonials</h1>
            <img src={theme_pattern} alt="" />
        </div>
        
        <div className="services-container">
{Services_Data.map((service, index)=>{
    return <div key={index} className="services-format">
<h3>{service.no}</h3>
<h2>{service.name}</h2>
<p>{service.review}</p>
<div className="services-readmore">
    <p>Read More</p>
    <img src={arrow_icon} alt="" />
</div>


    </div>
})}

        </div>
        </div>
  )
}

export default Testimonials