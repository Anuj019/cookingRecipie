import { useState, useRef, useEffect } from "react"

// styles 
import "./Create.css"

import React from 'react'
import { useFetch } from "../../hooks/useFetch"
import { useHistory } from "react-router-dom"

const Create = () => {
const [ title, setTitle] = useState('')
const [ method, setMethod] = useState('')
const [ coockingTime, setCookingTime ] = useState('')
const [ newIngredient, setNewIngredient] = useState('')
const [ ingredients, setIngredients] = useState([])
const ingredientInput = useRef(null)
const history = useHistory()

const {postData, data, error} = useFetch('http://localhost:3000/recipes', "POST")

const handleSubmit = (e) => {
e.preventDefault()
postData({title, ingredients, method, coockingTime: coockingTime + ' minutes'})

}

const handleAdd = (e) => {
e.preventDefault()
const ing = newIngredient.trim()

if(ing && !ingredients.includes(ing) ) {
setIngredients(prevIngredients => [...prevIngredients, ing])
}
setNewIngredient('')
ingredientInput.current.focus()
}
// redirect user after addning new rcipe 

useEffect(() => {
if(data){
 history.push('/')
}
}, data)

  return (
    <div className="create">
   <h2 className="page-title"> Add New Recipe </h2>
   <form onSubmit={handleSubmit}>
   <label>
    <span>Recipe Title </span>
    <input type="text"
     name="title" 
     id=""
     value={title}
     onChange={(e) => setTitle(e.target.value)} 
     required/>
   </label>
  <label>
    <span> Recipe Ingredients </span>
    <div className="ingredients">
      <input type="text" 
      name="" 
      value={newIngredient} 
      ref={ingredientInput}
      onChange={(e) =>  setNewIngredient(e.target.value)}
      />
      
     <button className="btn" onClick={handleAdd}> Add</button>
    </div>
  </label>
 <p> Current Ingreadients: {ingredients.map(i => <em key={i}>{i}, </em>)}</p>
   <label>
    <span> Recipie Method </span>
    <textarea type="text"
     name="method" 
     id=""
     value={method}
     onChange={(e) => setMethod(e.target.value)} 
     required/>
   </label>
   <label>
    <span>Cooking time  </span>
    <input type="number"
     name="coockingTime" 
     id=""
     value={coockingTime}
     onChange={(e) => setCookingTime(e.target.value)} 
     required/>
   </label>
  <button className="btn"> Submit</button>
   </form>

    </div>
  )
}

export default Create