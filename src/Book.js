import React  from 'react'
import PropTypes from 'prop-types'

class Book extends React.Component {

constructor(props) {
    super(props);
    this.state = this.props;

    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }



onShelfChange(book,shelf){
        this.setState({shelf: event.target.value});
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
                                 <select value={this.state.value} onChange={this.handleChange}>
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