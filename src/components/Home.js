import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {
const [search, setSearch] = useState();
//integrate onchange with state, so that what I am writing is stored in the state

  return (
    <div className='homeBg'>
      <div className='home'>
        <h1>Search for your favourite movies and tv shows!.</h1>
        <input onChange={(event)=>setSearch(event.target.value)} value={search} type='text' placeholder='Search Movies, TV shows and more...'/>
        <button>
          <Link to={`/search/${search}`}>Search</Link>
        </button>
      </div>
    </div>
  )
}

export default Home