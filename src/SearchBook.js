import React from 'react'
import * as BooksAPI from './utils/BooksAPI'
import {DebounceInput} from 'react-debounce-input';
import { Link } from 'react-router-dom';
import ShelfBook from './ShelfBook';

class SearchBook extends React.Component {
state={
         books: [],
         query:''
       }

updateQuery = (query) => {
  BooksAPI.getAll()
  this.setState(() =>({
   query : query.trim()
  }))
}

componentDidMount() {
      BooksAPI.getAll()
           .then( (books) => {
           this.setState({ books })
            })
        }

render(){

const {query} = this.state
const {books} = this.state
const showingBooks = query === ''
  ? books
  :books.filter((b) =>(
  b.title.toLowerCase.includes(b.query.toLowerCase())

  ))


return(
 <div className="search-books">
                                      <div className="search-books-bar">
                                                       <Link to="/" className="close-search">Close</Link>
                                                       <div className="search-books-input-wrapper">
                                                         {/*
                                                           NOTES: The search from BooksAPI is limited to a particular set of search terms.
                                                           You can find these search terms here:
                                                           https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
                                                           However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                                                           you don't find a specific author or title. Every search is limited by search terms.
                                                         */}
                                                         <input type="text" placeholder="Search by title or author"
                                                          value={query}
                                                           onChange={(event) => this.updateQuery(event.target.value)}/>

                                                       </div>
                                                     </div>
                                                     <div className="search-books-results">
                                                     <ShelfBook books={books}/>
                                                       <ol className="books-grid"></ol>
                                                     </div>
                                    </div>



)}



}

export default SearchBook;
