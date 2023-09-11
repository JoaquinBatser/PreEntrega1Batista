import React from 'react'
import shoppingBag from '../images/shopping-bag.svg'

const CartWidget = () => {
  return (
    <div>
        <div className='hover:bg-black/5 hover:rounded hover:cursor-pointer transition ease-in-out duration-300 py-1 px-2'> 
            <span className='absolute bg-red-500 rounded-full w-4 text-center text-xs text-white ml-3.5 mt-3.5'>1</span>
            <img src={shoppingBag} alt="" />
        </div>
    </div>
  )
}

export default CartWidget