import React  from 'react'
import SearchBook from './SearchBook'
import { Link } from 'react-router-dom'



function ListBooks (props) {
const noThumbLink = "https://books.google.com/googlebooks/images/no_cover_thumb.gif"

return (
 <div className="list-books">
        <div className="list-books-title">
        <h1>My Reads</h1>
        </div>
        <div className="list-books-content">

        <ol className="books-grid">
        {props.books.map((book)=> (
        <li key={book.id}>
        <div className="book">
        <div className="book-top">
                <div className="book-shelf-changer">
                    <select>
                    <option value="none" disabled>Move to..</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="deleteBook">Delete Book</option>
                    </select>
                </div>
        <div className="book-cover" style={{
             width: 128, height: 193, backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail: noThumbLink})`}}/>
        </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>

        </li>
        ))}
          </ol>
          </div>
           <div className="open-search">
                                  <Link to="/add">Add a book</Link>
                                  </div>
  </div>

   )
   }
export default ListBooks;