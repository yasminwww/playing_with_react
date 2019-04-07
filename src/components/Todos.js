import React, { Component } from 'react'


class Todos extends Component {
    state = {
        todos: 'Yasmin',
        age: 30
    }

    
    handleClick = (e) => {
        this.setState({
            todos: 'Nils'
        })
        console.log(this.state)
    }


    handleMouseOver = (e) => {
        console.log(e, e.pageX)
    }


    handleChange = (e) => {
        this.setState({
            todos: e.target.value
        })
    }


    handleSubmit = (e) => {
        e.preventDefault()
    }


    render() {
        return (
            <div id='todos'>
            // <h1>{this.state.todos}</h1>
            // <h1>{this.state.age}</h1>
            //     <form onSubmit={this.handleSubmit}>
            //         <input type='text' onChange={this.handleChange}/>
            //         <button onClick={this.handleClick}>Submit</button>
            //     </form>
            </div>
        )
    }
}

export default Todos
