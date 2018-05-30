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

return (

 <div className="list-books">
        <div className="list-books-title">
        <h1>My Reads</h1>
        </div>
        <div className="list-books-content">
        <ShelfBook books={this.state.books}/>
          </div>
           <div className="open-search">
                                  <Link to="/add">Add a book</Link>
                                  </div>
  </div>

   )
   }
   }
export default ListBooks;