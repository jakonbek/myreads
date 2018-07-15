import React  from 'react'
import Book from './Book'

class ShelfBook extends React.Component {

 render(){
const { books,bookShelves, shelfChange }= this.props

return(
             <div className="bookshelf">
                               <h2 className="bookshelf-title"></h2>
                               <div className="bookshelf-books">
                                 <ol className="books-grid">
                                   {books.map((book,index) =>(
                                   <Book
                                         key={index}
                                         shelfChange={shelfChange}
                                         book={book}
                                    />
                                   ))}
                                </ol>
                                </div>
                                </div>
)
}
}
export default ShelfBook;