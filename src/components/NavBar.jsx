import React from 'react'
import user from '../images/user.svg'
import globe from '../images/globe.svg'
import styles from '../NavBar.module.css'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <div className='flex justify-between items-center hover:cursor-pointer px-12 p-4 text-sm font-bold'>
        <div>
            <h1 className={styles.logo} >COIL</h1>
        </div>

        <div className='hidden lg:inline'>
            <ul className='flex justify-center'>
                <li className='hover:bg-black/5 hover:rounded hover:cursor-pointer transition ease-in-out duration-300 py-1 px-4' >Vehicles</li>
                <li className='hover:bg-black/5 hover:rounded hover:cursor-pointer transition ease-in-out duration-300 py-1 px-4' >Energy</li>
                <li className='hover:bg-black/5 hover:rounded hover:cursor-pointer transition ease-in-out duration-300 py-1 px-4' >Charging</li>
                <li className='hover:bg-black/5 hover:rounded hover:cursor-pointer transition ease-in-out duration-300 py-1 px-4' >Discover</li>
                <li className='hover:bg-black/5 hover:rounded hover:cursor-pointer transition ease-in-out duration-300 py-1 px-4' >Shop</li>
            </ul>
        </div>

        <div className='hidden lg:flex items-center'>
            <CartWidget />
            <img  className='hover:bg-black/5 hover:rounded hover:cursor-pointer transition ease-in-out duration-300 py-1 px-2' src={globe} alt="" />
            <img  className='hover:bg-black/5 hover:rounded hover:cursor-pointer transition ease-in-out duration-300 py-1 px-2' src={user} alt="" />
        </div>

        <div className='lg:hidden '>
            <button className='py-1 px-4 bg-black/5 rounded hover:bg-black/10'>Menu</button>
        </div>
    </div>
  )
}

export default NavBar