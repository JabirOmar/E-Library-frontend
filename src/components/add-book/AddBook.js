import React, { Component } from 'react'
import { BsCheckCircleFill, BsExclamationCircleFill } from 'react-icons/bs'
import './add-books.css'
import axios from 'axios';
class AddBook extends Component {
    constructor(props) {
        super(props);
     

     this.state = {
        title: String,
        author: String,
        description: String,
        pages: Number
     };
    };
    // Start your code here
    // rconst,
    // props and axios
   

  render() {
    

    const addBook = {
        title: String, 
        author: String, 
        description: String, 
        pages: Number,
    };
    axios.post('https://rocky-river-97920.herokuapp.com/books', addBook)
    .then(response =>{ this.setState({
        books: response.data
    })
    // console.log(response.data)
})
    

    const bookFocus = () => {
        const bookLabel = document.getElementById('book_label')
        bookLabel.classList.add('focus')
        bookLabel.classList.remove('wrong')
    }
    const bookBlur = () => {
        const bookInputValue = document.getElementById('book_input').value
        const bookLabel = document.getElementById('book_label')
        const bookCheck = document.getElementById('book_check')
        const bookWrong = document.getElementById('book_wrong')

        if (bookInputValue.length < 1) {
            bookLabel.classList.remove('focus')
            bookLabel.classList.add('wrong')
            bookWrong.style.display = 'block'
            bookCheck.style.display = 'none'
        }else {
            bookLabel.classList.add('correct')
            bookLabel.classList.remove('wrong')
            bookCheck.style.display = 'block'
            bookWrong.style.display = "none"
        }
    }

    const authorFocus = () => {
        const authorLabel = document.getElementById('author_label')
        authorLabel.classList.add('focus')
        authorLabel.classList.remove('wrong')
    }
    const authorBlur = () => {
        const authorInputValue = document.getElementById('author_input').value
        const authorLabel = document.getElementById('author_label')
        const bookCheck = document.getElementById('author_check')
        const bookWrong = document.getElementById('author_wrong')

        if(authorInputValue.length < 1) {
            authorLabel.classList.remove('focus')
            authorLabel.classList.add('wrong')
             bookWrong.style.display = 'block'
            bookCheck.style.display = 'none'
        }else {
            authorLabel.classList.add('correct')
            authorLabel.classList.remove('wrong')
            bookCheck.style.display = 'block'
            bookWrong.style.display = "none"
        }
    }

    const descFocus = () => {
        const descLabel = document.getElementById('desc_label')
        descLabel.classList.add('focus')
        descLabel.classList.remove('wrong')
    }
    const descBlur = () => {
        const descInputValue = document.getElementById('desc_input').value
         const descLabel = document.getElementById('desc_label')

        if(descInputValue.length < 1) {
            descLabel.classList.remove('focus')
            descLabel.classList.add('wrong')
        }else {
            descLabel.classList.add('correct')
            descLabel.classList.remove('wrong')
        }
    }

    const totalFocus = () => {
        const totalLabel = document.getElementById('total_label')
        totalLabel.classList.add('focus')
        totalLabel.classList.remove('wrong')
    }
    const totalBlur = () => {
        const totalInputValue = document.getElementById('total_input').value
        const totalLabel = document.getElementById('total_label')

        if(totalInputValue.length < 1){
            totalLabel.classList.remove('focus')
            totalLabel.classList.add('wrong')
        }else {
            totalLabel.classList.add('correct')
            totalLabel.classList.remove('wrong')
        }

    }


    const submitHandler = (e) => {
        e.preventDefault()
        // onSubmit
        
    }
    

    return (
      <div className='add-book-container'>
         <form onSubmit={submitHandler}>
            <div className='form_div'>
                <label className='label'  id='book_label'>Book Name</label>
                <BsCheckCircleFill id='book_check'/>
                <BsExclamationCircleFill id='book_wrong'/>
                <input className='input' id='book_input' onFocus={bookFocus} onBlur={bookBlur} type='text' name='book-name' required/>
            </div>
            <div className='form_div'>
                <label className='label' id='author_label' >Author</label>
                <BsCheckCircleFill id='author_check'/>
                <BsExclamationCircleFill id='author_wrong'/>
                <input className='input' id='author_input' onFocus={authorFocus} onBlur={authorBlur} type='text' name='Author' required/>
            </div>
            <div className='form_div'>
                <label className='label' id='desc_label'>Description</label>
                <input className='input' id='desc_input' onFocus={descFocus} onBlur={descBlur} type='text' name='Description' required/>
            </div>
            <div className='form_div'>
                <label className='label' id='total_label'>Total pages</label>
                <input className='input' id='total_input' onFocus={totalFocus} onBlur={totalBlur} type='number' name='page-number' required/>
            </div>

            <div className='submit_button'>
                <button type='submit'>Submit</button>
            </div>
         </form>
      </div>
    )
  }
}

export default AddBook