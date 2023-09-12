import React from 'react'
import { AiOutlineHeart , AiOutlineClose } from 'react-icons/ai'
import { FiShoppingBag ,FiSearch } from 'react-icons/fi'
import { useState } from 'react'

export const ProductItems = ({data}) => {
 
    const [openImage, setOpenImage] = useState(false)
    const [img, setImg] = useState("")

    const onOpenImage = (src) => {
      setImg(src)
      setOpenImage(true)
    }
  return (
    <>
    <div className=' product_items '>
        {data.map((items)=>(
            <div className='box' key={items.id}>
                <div className='img'>
                    <img src={items.cover} alt="" />
                    <div className="overlay">
                        <button classname='button'>
                            <FiShoppingBag/>
                        </button>
                        <button classname='button'>
                            <AiOutlineHeart/>
                        </button>
                        <button classname='button' onClick={()=> onOpenImage(items.cover)}>
                            <FiSearch/>
                        </button>
                    </div>
                </div> 
                <div className="details">
                    <h3>{items.title}</h3>
                    <p>{items.author}</p>
                    <h4>Price : ${items.price}</h4>
                </div>
            </div>
        ))}
    </div>

    <div className={openImage ? "modelOpen" : "modelClose"}>
        <div className='onClickImage'>
          <img src={img} alt='' />
          <button className='button' onClick={() => setOpenImage(false)}>
            <AiOutlineClose />
          </button>
        </div>
      </div>

    </>
  )
}
