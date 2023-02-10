import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function SearchResult() {
  const {movie} = useParams();//extractor
  const url =`https://imdb-api.com/en/API/Search/k_28rq0k0f/${movie}`


const [data, setData] = useState();//initially empty
useEffect(() => {
  async function fun1() {
    const response =await axios.get(url);
    //fetch
    setData(response.data.results);
  }
fun1();
}, [url])

//you cannot map undefined


//conditional mapping ?

// ? acts as a gate=> if there is a value in the array then only open the gate or proceed or else don't proceed

  return (
    <div className='movieCards'>
        {
          data?.map((card)=>(
            <div className='movieCard'>
            <Link className='movieCardLink' to={`/movie/${card.id}`}>
                <img src={card.image} alt='movie img' className='movieCardImg' />
                <h1 className='movieCardTitle'>{card.title}</h1>
                
            </Link>
        </div>
            ))
        }
        
    </div>
  )
}

export default SearchResult



