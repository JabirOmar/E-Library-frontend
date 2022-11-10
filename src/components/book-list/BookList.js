import React, { Component } from 'react'
import './booklist.css'
import books from '../../Books.json'

export class BookList extends Component {

  render() {
    return (
      <div>
        <div className='list_title'>
          <h2>Book List</h2>
        </div>
        <div className='list_container'>

          {
            books.map( book => {
              return(
                <div key={book.id} className='list_card'>
                  <div className='info'>
                    <span className='main_title'>Book Name<i> : </i></span>
                    <p>{book.book_name}</p>
                  </div>

                  <div className='info'>
                    <span className='main_title'>Author<i> : </i></span>
                    <p>{book.Author}</p>
                  </div>

                  <div className='info'>
                    <span className='main_title'>Description<i> : </i></span>
                    <p>{book.Description}</p>
                  </div>

                  <div className='info'>
                    <span className='main_title'>Total pages<i> : </i></span>
                    <p>{book.total_pages}</p>
                  </div>
              </div> 
              )
            })
          }

        </div>
      </div>
    )
  }
}

export default BookList