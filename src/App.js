import React from 'react'
import { Route } from 'react-router-dom'
import ListBooks from './ListBooks'
import SearchBook from './SearchBook'
import './App.css'



class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
      <Route exact path="/" render={() => (
       <ListBooks/>
      )}/>
    <Route path="/search" render={() => (
                                 <SearchBook/>
                                )}/>
     </div>
    )
  }
}

export default BooksApp;
