// styles 
import './Searchbar.css'

import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const SearchBar = () => {
const [term, setTerm] = useState('')
const history = useHistory()

const handleSubmit= (e) =>{
e.preventDefault()
// ?q= search
history.push(`/search/?q=${term}`)
}

  return (
    <div className='searchbar'>
        <form  onSubmit={handleSubmit}>
            <label htmlFor="search">Search</label>
            <input type="text"
             name="search"
              id="search"
              onChange={(e) => setTerm(e.target.value) }
             required
            />
        </form>
    </div>
  )
}

export default SearchBar