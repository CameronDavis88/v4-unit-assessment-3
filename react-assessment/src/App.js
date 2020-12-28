
import { Component } from 'react'
import './App.css';
import Data from './Data'
import BookList from './Components/BookList'
import Shelf from './Components/Shelf'
import SearchBar from './Components/SearchBar'

class App extends Component {
  constructor() {
    super()
    this.state = {
      books: Data,
      shelf: []
    }
    this.addToShelf = this.addToShelf.bind(this)
    this.clearShelf = this.clearShelf.bind(this)
    this.reset= this.reset.bind(this)
  }
  addToShelf() {
    this.state.shelf.push()
  }
  clearShelf() {
    this.setState({shelf: []})
  }
  filterBooks(val){
    let filteredBooks = []
    for(let i=0; i<this.state.books.length; i++){
        if(this.state.books[i].title.includes(val)){
            this.filterBooks.push(this.state.books[i])
        }else if(this.state.books[i].author.includes(val)){
        }
        this.filterBooks.push(this.state.books[i])
    }
          return this.setState({books: filteredBooks})
}
  reset() {
    this.state.books = Data
  }
  render() {
    return (
      <div className="App">
        <SearchBar filterBooks={this.filterBooks} reset={this.reset()}/>
        <BookList books={this.state.books} addToShelf={this.addToShelf} />
        <Shelf shelf={this.state.shelf} cleacrShelf={this.clearShelf}/>
      </div>
    );
  }
}

export default App;
