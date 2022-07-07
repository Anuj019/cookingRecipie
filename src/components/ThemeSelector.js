import { useTheme } from "../hooks/useTheme"
import modeIcon from "../assets/mode-icon.svg"
import React from 'react'
// style 

import "./ThemeSelector.css"

const themeColors = ['#58249c', '#249c6b', '#b70233']


function ThemeSelector() {

    const {changeColor, changeMode, mode} = useTheme()

    const toggleMode = () => {
        if(mode === "light"){
            changeMode('dark')
        } else {
         changeMode('light')
        }

    }

    console.log(mode)

  return (
    <div className="theme-selector">
        <div className="mode-toggle">
            <img 
            src={modeIcon}
             alt="theme"
             onClick={toggleMode}
             style={{filter: mode === 'dark' ? 'invert(100%)' : 'invert(20%)' }}
             />
        </div>
        <div className="theme-buttons">
     {themeColors.map((color) =>  (
        <div 
        
        key={color}
        onClick={() =>  changeColor(color)}
        style={{background: color}}
        />    
     ))}
        </div>

    </div>
  )
}

export default ThemeSelector