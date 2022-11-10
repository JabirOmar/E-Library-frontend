import React, { useState, useEffect } from "react";
import "./booklist.css";
import axios from "axios";


function BookList() {


  const [books, setBooks] = useState([]);
  const apiEndPoint = "https://rocky-river-97920.herokuapp.com/books";
  useEffect(() => {
    const getBooks = async () => {
      const { data: res } = await axios.get(apiEndPoint);
      setBooks(res);
    };
    getBooks();
  }, []);

  return (
    <div>
      <h1 className="list_title">
        We have list of <span>{books.length}</span> Books
      </h1>

      <div className="list_container">
        {books.map((book) => {
          return (
            <div key={book.id} className="list_card">
              <div className="info">
                <span className="main_title">
                  Book Name<i> : </i>
                </span>
                <p>{book.title}</p>
              </div>

              <div className="info">
                <span className="main_title">
                  Author<i> : </i>
                </span>
                <p>{book.author}</p>
              </div>

              <div className="info">
                <span className="main_title">
                  Description<i> : </i>
                </span>
                <p>{book.description}</p>
              </div>

              <div className="info">
                <span className="main_title">
                  Total pages<i> : </i>
                </span>
                <p>{book.pages}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BookList;
