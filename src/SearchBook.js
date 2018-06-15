import React from 'react'
import * as BooksAPI from './utils/BooksAPI'
import {DebounceInput} from 'react-debounce-input';

class SearchBook extends React.Component {
state={
         books: [],
         query:''
       }

updateQuery = (query) => {
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
 <input className="top-books"
  type="text"
  value={query}
  onChange={(event) => this.updateQuery(event.target.value)}
 />
</div>

)}



}

export default SearchBook;
