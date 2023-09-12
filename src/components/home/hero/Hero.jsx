import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { SearcgItems } from './SearcgItems'
import { products } from '../../assets/data/data'


export const Hero = () => {

  const[value,setValue] = useState("")
  const onChange =(e)=>{
    setValue(e.target.value)
  }

  const onSearch =(key) =>{
    setValue(key)
    console.log("search " , key)
  }

  return (
    <section className='hero'> 
        <div className="container">
            <h1>
                <label htmlFor="">Over <span>6,500</span> Curated Design</label>
                <br />
                <label htmlFor="">Resources, <span>Graphic & Website</span></label>
            </h1>
            <p>High-quality Design theme for personal or commercial use contain 6k+ items in 100 categories</p>
            <div className='search'>
              <span>All Categories </span>
              <hr />
              <input type="text" placeholder='Search Product ...' onChange={onChange} value={value} />
              <button onClick={()=> onSearch(value)}>
                <BiSearch className='searchIcon heIcon'/>
              </button>
            </div>

            <SearcgItems product = {products} value={value} onSearch={onSearch}/>
            <p>Examples: Mockup, PSD, Theme Design, Image,,,</p>
        </div>
    </section>
  )
}
