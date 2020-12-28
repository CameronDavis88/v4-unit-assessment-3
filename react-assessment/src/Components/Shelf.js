
import { Component } from "react";
class Shelf extends Component{
    render(){
        let mappedTitles = this.props.shelf.map(function(e) {
            return <p>{e.title}</p>   
        });
        return(
            <div className='Shelf'>
                {mappedTitles}
                <button onclick= {() => {this.clearShelf()}}>Clear Shelf</button>
            </div>
        )
    }
}

export default Shelf