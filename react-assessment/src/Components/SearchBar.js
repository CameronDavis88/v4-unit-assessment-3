
import { Component } from "react";
class SearchBar extends Component{
    constructor(){
        super()
        this.state = {
            input: ''
        }
    }
    handleChange(val){
        this.setState({input: val})
    }
    handleClick(){
        this.props.filterBooks(this.state.input)
    }
    handleClear(){
        this.setState({input: ''})
        this.props.reset()
    }
    render(){
        console.log(this.state.input)
        return(
            <div className='Search'>
                <input onChange= {(e)=> this.handleChange(e.target.value)} let value = {this.state.input}/>
                <button onClick= {(e)=> this.handleClick(e.target.value)}>Search</button>
                <button onClick= {(e)=> this.handleClear(e.target.value)}>Clear Search</button>
            </div>
        )
    }
}

export default SearchBar
