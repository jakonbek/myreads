import React  from 'react'
import SearchBook from './SearchBook'
import ShelfBook from './ShelfBook'
import * as BooksAPI from './utils/BooksAPI'
import { Link } from 'react-router-dom'



class ListBooks extends React.Component {
state={
         books: []
       }

componentDidMount() {
      BooksAPI.getAll()
           .then( (books) => {
           this.setState({ books })
            })
        }

render(){
const bookShelves = [
      { value: 'currentlyReading', name: 'Currently Reading' },
      { value: 'wantToRead',  name: 'Want to Read' },
      { value: 'read', name: 'Read'} ]

return (

 <div className="list-books">
        <div className="list-books-title">
        <h1>My Reads</h1>
        </div>
        <div className="list-books-content">
                {bookShelves.map((shelf,k) => {
                  const booksOnShelf = this.state.books.filter( book => book.shelf === shelf.value)
                  return (
                    <div className="bookshelf" key={k}>
                      <h2 className="bookshelf-title">{shelf.name}</h2>
                      <div className="bookshelf-books">
                      <ShelfBook
                        books={booksOnShelf}/>
                      </div>
                    </div>
                  )
                })}

</div>
 <div className="open-search">
                                  <Link to="/add"><SearchBook/></Link>

                                  </div>

  </div>

   )
   }
   }

export default ListBooks;