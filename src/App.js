import React from 'react'
import { Route } from 'react-router-dom'
import AddBook from './AddBook'
import ListBooks from './ListBooks'
import './App.css'



class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
      <Route exact path="/" render={() => (
       <ListBooks/>
      )}/>
    <Route path="/add" component={AddBook} />
     </div>
    )
  }
}

export default BooksApp;
