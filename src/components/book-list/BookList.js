import React, { useState, useEffect } from "react";
import "./booklist.css";
import axios from "axios";
// import { Link } from'react-router-dom'

function BookList() {
  const [addedBooks, setAddedBooks] = useState([]);

  function loadBooks() {
    axios
      .get("https://rocky-river-97920.herokuapp.com/books")
      .then((response) => {
        setAddedBooks(response.data.reverse());
      });
  }
  // render() {

  useEffect(() => {
    loadBooks();
  }, []);

  // function deleteBook(id) {
  //   axios.delete(`https://rocky-river-97920.herokuapp.com/books/${id}`).then(loadBooks());
  // }

  return (
    <div>
      <div className="list_title">
        <h2>Book List</h2>
      </div>
      <div className="list_container">
        {addedBooks.map((data, index) => {
          return (
            <div key={index} className="list_card">
              <div className="info">
                <span className="main_title">
                  Book Name<i> : </i>
                </span>
                <p>{data.title}</p>
              </div>

              <div className="info">
                <span className="main_title">
                  Author<i></i>
                </span>
                <p>{data.author}</p>
              </div>
              {/* <div> 
                    <span className="main_title">Author</span>
                  <p>{data.author}</p>
                  </div> */}
              <div className="info">
                <span className="main_title">
                  Description<i></i>
                </span>
                <p>{data.description}</p>
              </div>
              <div className="info">
                <span className="main_title">
                  Total pages<i></i>
                </span>
                <p>{data.pages}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BookList;
