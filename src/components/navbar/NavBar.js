import React from 'react'
import { NavLink } from 'react-router-dom'
import { HiMoon, HiSun } from 'react-icons/hi'
import './navbar.css'

function NavBar() {

    const menu = () => {
        const menuBox = document.getElementById('menu_box')
        const navLinks = document.querySelector('.nav_links')
        menuBox.classList.toggle('clicked')
        navLinks.classList.toggle('show')
    }

    const theme = () => {
        const indicat = document.getElementById('indicator')
        const body = document.querySelector('body')
        indicat.classList.toggle('dark')
        body.classList.toggle('dark')
    }

  return (
    <nav>
        
        <div className='left_nav'>
            <p>E-Library</p>
        </div>

        <div className='right_nav'>
            <div className='nav_links'>
                <ul>
                    <li><NavLink to='/'>Home</NavLink></li>

                    <li><NavLink to='/add-book'>Add Book</NavLink></li>

                    <li><NavLink to='/book-list'>Book List</NavLink></li>

                    <li><NavLink to='/about'>About</NavLink></li>

                    <li><NavLink to='/reviews'>Reviews</NavLink></li>
                </ul>
            </div>

            <div className='theme_container' onClick={theme}>
                <HiSun id='sun' />
                <i id='indicator'></i>
                <HiMoon id='moon'/>
            </div>

             <div id='menu_box' onClick={menu}>
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
            </div>
        </div>

    </nav>
  )
}

export default NavBar