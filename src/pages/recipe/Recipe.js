import "./Recipe.css"
import React from 'react'
import { Link, useParams } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch"

const Recipe = () => {
  const {id }= useParams()
  const url = 'http://localhost:3000/recipes/' + id
  const { data, isPending, error} = useFetch(url)
console.log(data)
  return (
    <div className='recipe'>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading"> Loading... </p>}
      {data &&  (
        <>
        <h2 className="page-title">{data.title}</h2>
        <p> Takes {data.cookingTime} to cook </p>
        <ul>
          {data.ingredients.map(ing => <li key={ing}> {ing}</li>)}
        </ul>
        <p className="method">{data.method}</p>
        </>
        )
      }
      </div>
  )
}

export default Recipe