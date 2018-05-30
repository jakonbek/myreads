import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './utils/BooksAPI'
import AddBook from './AddBook'
/*import ListBooks from './ListBooks'*/
import ShelfBook from './ShelfBook'
import './App.css'



class BooksApp extends React.Component {
 state={
         books: []
         }

componentDidMount() {
      BooksAPI.getAll()
           .then( (books) => {
           this.setState({ books })
            })
        }

  render() {
    return (
      <div className="app">
      <Route exact path="/" render={() => (

       <ShelfBook/>

      )}/>
    <Route path="/add" component={AddBook} />
     </div>
    )
  }
}

export default BooksApp;
