import React from 'react'
import { RiDoubleQuotesL, RiDoubleQuotesR  } from 'react-icons/ri'
import user from '../../Images/user.png'
import './reviews.css'

function Reviews() {
  return (
    <>
    <div className='review_section'>
    <h3>Review Section</h3>
    <hr id='horizontal_line'/>
    </div>

    <div className='review_container'>

      <div className='review_card'>
        <div className='review_top'>
          <img src={user} alt='' id='user'
          />
        </div>
        <div className='review_center'>
          <p> <RiDoubleQuotesL className='quote'/> is a placeholder text commonly used to demonstrate the visual form of a document or a typeface <RiDoubleQuotesR className='quote'/></p>
        </div>
        <div className='review_bottom'>
          <p>The name</p>
        </div>
      </div>

      <div className='review_card'>
        <div className='review_top'>
          <img src={user} alt='' id='user'
          />
        </div>
        <div className='review_center'>
          <p> <RiDoubleQuotesL className='quote'/> is a placeholder text commonly used to demonstrate the visual form of a document or a typeface <RiDoubleQuotesR className='quote'/></p>
        </div>
        <div className='review_bottom'>
          <p>The name</p>
        </div>
      </div>

      <div className='review_card'>
        <div className='review_top'>
          <img src={user} alt='' id='user'
          />
        </div>
        <div className='review_center'>
          <p> <RiDoubleQuotesL className='quote'/> is a placeholder text commonly used to demonstrate the visual form of a document or a typeface <RiDoubleQuotesR className='quote'/></p>
        </div>
        <div className='review_bottom'>
          <p>The name</p>
        </div>
      </div>
      
    </div>

    <div className='contact_form_container'>
      <section className='contact_form'>

        <div className='contact_title'>
          <h3> Become a member </h3><hr/>
        </div>

        <div className='contact_name contact_detail'>
          {/* <label>Name</label> */}
          <input className='contact_input' type='text' placeholder='Name' />
        </div>
        <div className='contact_email contact_detail'>
          {/* <label>Name</label> */}
          <input className='contact_input' type='email' placeholder='Email' />
        </div>
        <div className='contact_comment contact_detail'>
          <textarea maxLength={100} placeholder="Do you have any comment...">
          </textarea>
        </div>

        <div className='contact_button_container'>
          <button id='contact_submit_btn' type='submit'>Submit</button>
        </div>
      </section>
    </div>

    </>
  )
}

export default Reviews