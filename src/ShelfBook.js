import React  from 'react'
import Book from './Book'

class ShelfBook extends React.Component {

 render(){
const { books }= this.props
console.log('Props', this.props)
return(
             <div className="bookshelf">
                               <h2 className="bookshelf-title"></h2>
                               <div className="bookshelf-books">
                                 <ol className="books-grid">
                                   {books.map((book,index) =>(
                                   <Book
                                         key={index}
                                         book={book}
                                         books={books}
                                         />
                                   ))}
                                </ol>
                                </div>
              </div>
)

}
}
export default ShelfBook;