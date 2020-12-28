
import { Component } from "react";

class BookList extends Component {
    render() {
        let mappedBooks = this.props.books.map(function(e) { 
            return <div> <img  src={e.img} onClick={ () => {this.props.addToShelf(e.title)}} />
                <p>{e.title} by {e.author}</p></div>
        });
        return (
            <div className='List'>
                {mappedBooks}
            </div>
        )
    }
}

export default BookList