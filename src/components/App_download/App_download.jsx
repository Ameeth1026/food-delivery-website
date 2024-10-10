import React from 'react'
import './App_download.css'
import {assets} from '../../assets/assets'

const App_download = () => {
  return (
    <div className='appdownload' id='appdownload'>
        <p>for better experience download<br/>tomato app</p>
        <div className="app-download-platform">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>
    </div>
  )
}

export default App_download