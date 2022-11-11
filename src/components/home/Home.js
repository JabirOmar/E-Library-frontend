import React from 'react'
import { BsChevronDoubleDown } from 'react-icons/bs'
import './home.css'

function Home() {

    window.addEventListener('scroll', windowScrolled)

    function windowScrolled() {
        const yScroll = window.scrollY
        const icon = document.getElementById('scroll_down_icon')


        if (yScroll >= 100){
            icon.style.display = "none"
        }else {
            icon.style.display = "block"
        }
    }

  return (
    <>
    <section className='home_section'>

      <div className='home_image_conainer'>
        <h2>Readers are <span>Leaders</span></h2>
      </div>

      <div className='srcoll_down_image_container'>
         <BsChevronDoubleDown id='scroll_down_icon'/>
      </div>

      <div className='quotes'>
        <h1>Some Quotes</h1>

        <div className='car_container'>
            <div className='card'>
                <p>A book is a <span>gift</span> you can open again and again.</p>
            </div>
            <div className='card'>
                <p>Keep reading it's one of the most <span>marvelous</span> adventures that anyone can have.</p>
            </div>
            
            <div className='card'>
              <p>Keep reading it's one of the most <span>marvelous</span> adventures that anyone can have.</p>
            </div>
            <div className='card'>
              <p>A book is a <span>gift</span> you can open again and again.</p>
            </div>
        </div>
      </div>


    </section>

    </>
  )
}

export default Home