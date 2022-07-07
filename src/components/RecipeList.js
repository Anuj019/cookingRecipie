import './RecipeList.css'

import React from 'react'
import { Link } from 'react-router-dom'

const RecipeList = ({recipes}) => {

if (recipes.length < 1) {
  return <div className='error'> No Recipe to load </div>
}

  return (
    <div className='recipe-list'>
        {recipes.map((recipe) => {
     return <div key={recipe.id} className="card">
        <h3> {recipe.title}</h3>
        <p> {recipe.cookingTime} to make.</p>
        <div>
            {recipe.method.substring(0, 80)}...
            <Link to={`recipes/${recipe.id}`}>Cook This</Link>
        </div>
        </div>
      })}
    </div>
  )
}

export default RecipeList