import React , {  Component } from 'react'
import ListBooks from './ListBooks'

class ShelfBook extends React {

render (){

const { title } = this.props

return(
                <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                </div>
)
}
}
export default ShelfBook;