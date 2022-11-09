import React, { Component } from 'react'
import './booklist.css'

export class BookList extends Component {

  render() {
    return (
      <div>
        <div className='list_title'>
          <h2>Book List</h2>
        </div>
        <div className='list_container'>
          <div className='list_card'>
             <div>
              <span className='main_title'>Book Name</span>
              <p>The King</p>
             </div>

             <div>
              <span className='main_title'>Author</span>
              <p>John</p>
             </div>

             <div>
              <span className='main_title'>Description</span>
              <p>Political Book</p>
             </div>

             <div>
              <span className='main_title'>Total pages</span>
              <p>300</p>
             </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BookList