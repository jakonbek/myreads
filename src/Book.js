import React  from 'react'
import PropTypes from 'prop-types'
import * as BooksAPI from './utils/BooksAPI'

class Book extends React.Component {

state={
         books: [],

       }

componentDidMount() {
      BooksAPI.getAll()
           .then( (books) => {
           this.setState({ books })
            })
        }


shelfChange = (book,shelf) => {
        book.shelf = shelf
        BooksAPI.update(book,shelf).then(() => {
        BooksAPI.getAll().then((books)=>{
         this.setState((prevState)=>({
         books
         }))
        })
     })
    }

render(){
const  noThumbLink = "https://books.google.com/googlebooks/images/no_cover_thumb.gif"
const book = this.props.book
   return(

    <div className="book">
                             <div className="book-top">
                               <div className="book-cover"
                               style={{
                                                             width: 128,
                                                             height: 193,
                                                             backgroundImage: `url(${
                                                              book.imageLinks ? book.imageLinks.thumbnail : noThumbLink
                                                              })`}}>
                               </div>
                               <div className="book-shelf-changer">
                                 <select >
                                   <option value="none" disabled>Move to...</option>
                                   <option value="currentlyReading">Currently Reading</option>
                                   <option value="wantToRead">Want to Read</option>
                                   <option value="read">Read</option>
                                   <option value="none">None</option>
                                 </select>
                               </div>
                             </div>
                             <div className="book-title">{book.title}</div>
                             <div className="book-authors">{book.authors}</div>
                           </div>

     );
}
}

Book.propTypes = {

 book: PropTypes.object.isRequired

}

export default Book;