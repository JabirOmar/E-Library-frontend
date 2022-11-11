
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/navbar/NavBar';
import Home from './components/home/Home';
import AddBook from './components/add-book/AddBook';
import BookList from './components/book-list/BookList';
import About from './components/about/About';
import Reviews from './components/reviews/Reviews'

function App() {
  return (
    <>
      <NavBar />

      <div className='routes'>
        <Routes>
          <Route path="" element={<Home/>} />
          <Route path="/add-book" element={<AddBook/>} />
          <Route path="/book-list" element={<BookList/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/reviews" element={<Reviews/>} />
        </Routes>
      </div>
    </>
  );
}


export default App;
