import React, { useState } from 'react'
import { Heading } from '../../Common/Heading'
import { ProductItems } from './ProductItems'
import { products } from '../../assets/data/data'

export const Product = () => {
    const[data, setdata] =useState(products)
    console.log(setdata)
  return (
     <>
     <section className='product'>
        <div className="container">
            <Heading title='Trending Products' desc='Check the hottest design of the week. These rising star are worth your attention. '/>
            <ProductItems data={data}/>
        </div>
     </section>
     </>
  )
}
