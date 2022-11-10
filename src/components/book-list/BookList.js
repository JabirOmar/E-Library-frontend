
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './booklist.css'

function BookList() {

  const [books, setBooks] = useState([]);
    const apiEndPiont = 'https://rocky-river-97920.herokuapp.com/books'
    useEffect (() => {

        const getBooks = async () => {
            const {data:res }= await axios.get(apiEndPiont)
            setBooks(res)
        }
        getBooks();
    },[])
  
  return (
    <div>
        <h1 className='list_title'>We have list of <span>{books.length}</span> Books</h1>

        <div className='list_container'>

           {
            books.map( book => {
              return(
                <div key={book.id} className='list_card'>
                  <div className='info'>
                    <span className='main_title'>Book Name<i> : </i></span>
                    <p>{book.title}</p>
                  </div>

                  <div className='info'>
                    <span className='main_title'>Author<i> : </i></span>
                    <p>{book.author}</p>
                  </div>

                  <div className='info'>
                    <span className='main_title'>Description<i> : </i></span>
                    <p>{book.description}</p>
                  </div>

                  <div className='info'>
                    <span className='main_title'>Total pages<i> : </i></span>
                    <p>{book.pages}</p>
                  </div>
              </div> 
              )
            })
          }

        </div>


    </div>

    // from here

    // <div>
    //     <div className='list_title'>
    //       <h2>Book List</h2>
    //     </div>
        // <div className='list_container'>

        //   {
        //     books.map( book => {
        //       return(
        //         <div key={book.id} className='list_card'>
        //           <div className='info'>
        //             <span className='main_title'>Book Name<i> : </i></span>
        //             <p>{book.book_name}</p>
        //           </div>

        //           <div className='info'>
        //             <span className='main_title'>Author<i> : </i></span>
        //             <p>{book.Author}</p>
        //           </div>

        //           <div className='info'>
        //             <span className='main_title'>Description<i> : </i></span>
        //             <p>{book.Description}</p>
        //           </div>

        //           <div className='info'>
        //             <span className='main_title'>Total pages<i> : </i></span>
        //             <p>{book.total_pages}</p>
        //           </div>
        //       </div> 
        //       )
        //     })
        //   }

        // </div>
    //   </div>

    // to here
  )
}

export default BookList