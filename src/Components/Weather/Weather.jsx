import React from 'react'
import './Weather.css'
import clear from '../Assets/clear.png'
import cloud from '../Assets/cloud.png'
import drizzle from '../Assets/drizzle.png'
import humidity from '../Assets/humidity.png'
import rain from '../Assets/rain.png'
import search from '../Assets/search.png'
import snow from '../Assets/snow.png'
import wind from '../Assets/wind.png'

const Weather=()=>{

    return(
        <div className='container'>
            <div className="top-bar">
                <input type="text" className="cityInput" placeholder='search'/>
                <div className="search">
                    <img src={search} alt="" />
                </div>
            </div>
          <div className="weather-image">
            <img src={cloud} alt="" />
            </div>  
            <div className="weather-temp">24 c</div>
            <div className="weather-location">London</div>
            <div className="data-container"></div>
        </div>
    )
}

export default Weather