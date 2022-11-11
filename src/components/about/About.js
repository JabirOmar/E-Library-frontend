import React from 'react'
// import maleAvatart from '../../Images/male_avatar.jpg'
import './about.css'

function About() {
  return (
    <>
    <div className='about_section'>
    <h3>About Us</h3>
    <hr id='horizontal_line' />
    </div>

    <div className='about_info_container'>
      <div className='about_info'>
        <div>
          <p>Name : <span className='names'>Jabir Omar</span></p>
        </div>
        <div>
          <p>Title : Frontend Developer <br/> (Scrum master)</p>
        </div>
        <div>
          <p>Duty : Reactjs User Interface</p>
        </div>
      </div>

      <div className='about_info'>
        <div>
          <p>Name : <span className='names'>Ann Karanja</span></p>
        </div>
        <div>
          <p>Title : Frontend Developer</p>
        </div>
        <div>
          <p>Duty : API endPionts</p>
        </div>
      </div>

      <div className='about_info'>
        <div>
          <p>Name : <span className='names'>Corrine Muriuki</span></p>
        </div>
        <div>
          <p>Title : Backend Developer</p>
        </div>
        <div>
          <p>Duty : DB config, Active Records, Migrations</p>
        </div>
      </div>

      <div className='about_info'>
        <div>
          <p>Name : <span className='names'>Terah Mumuli</span></p>
        </div>
        <div>
          <p>Title : Backend Developer</p>
        </div>
        <div>
          <p>Duty : Routes</p>
        </div>
      </div>

      <div className='about_info'>
        <div>
          <p>Name : <span className='names'>Esther Nganga</span></p>
        </div>
        <div>
          <p>Title : Backend Developer</p>
        </div>
        <div>
          <p>Duty : Models</p>
        </div>
      </div>
      
    </div>
    
    </>
  )
}

export default About