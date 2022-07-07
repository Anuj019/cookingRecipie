import { createContext, useReducer } from "react";

const themeReducer = (state, action) => {
 switch (action.type) {
 case "CHANGE_COLOR":
    return {...state, color: action.payload}
 case "CHANGE_MODE":
    return { ...state, mode: action.payload}
    default:
        return state
 }
}


export const ThemeContext = createContext()

export const  ThemeProvider = ({ children}) => {

const [state, dispatch ] = useReducer(themeReducer,{color: '#58249c', mode: "light"} )


const   changeMode = (mode) => {
    dispatch({type: 'CHANGE_MODE', payload: mode})
}


 const changeColor = (color) => {
dispatch({type: 'CHANGE_COLOR', payload: color})
 }

 const value = {
    ...state, 
   changeColor, 
   changeMode 
   }

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )

}

