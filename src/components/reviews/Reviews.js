import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { RiDoubleQuotesL, RiDoubleQuotesR  } from 'react-icons/ri'
import user from '../../Images/user.png'
import './reviews.css'

function Reviews() {

  const [reviews, setReviews] = useState([]);

  const reviewsApi = 'https://rocky-river-97920.herokuapp.com/reviews'
  useEffect( () => {

    const getReviews = async () => {

      const { data:res } = await axios.get(reviewsApi )
      setReviews(res)
    }
    getReviews()
  },[])


  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const commentSubmit = (e) => {

    axios.post('https://rocky-river-97920.herokuapp.com/users', {
      name,
      email
    })
    .then(res =>  console.log(res))
    .catch(err => console.log(err))

    const userName = document.getElementById('user_name').value;

    alert(userName + ' now You are one of our members')

  }

  return (
    <>
    <div className='review_section'>
    <h3>Review Section</h3>
    <hr id='horizontal_line'/>
    </div>

    <div className='review_container'>

      {
        reviews.map( review => {
          return(
            <div className='review_card' key={review.id}>
              <div className='review_top'>
                <img src={user} alt='' id='user'
                />
              </div>
              <div className='review_center'>
                <p> <RiDoubleQuotesL className='quote'/> {review.comments} <RiDoubleQuotesR className='quote'/></p>
              </div>
              <div className='review_bottom'>
                <p>The name</p>
              </div>
            </div>
          )
        })
      }



      
      
    </div>

    <div className='contact_form_container'>
      <form className='contact_form' onSubmit={commentSubmit}>

        <div className='contact_title'>
          <h3> Become a member </h3><hr/>
        </div>

        <div className='contact_name contact_detail'>
          <input id='user_name' className='contact_input' type='text' placeholder='Name' required value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
        <div className='contact_email contact_detail'>
          <input id='user_email' className='contact_input' type='email' placeholder='Email' required value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className='contact_comment contact_detail'>
          <textarea maxLength={100} placeholder="Do you have any comment..." >
          </textarea>
        </div>

        <div className='contact_button_container'>
          <button id='contact_submit_btn' type='submit'>Submit</button>
        </div>
      </form>
    </div>

    </>
  )
}

export default Reviews