import React, {Component} from 'react'

// Class to handle state
class AddPerson extends Component {
  state = { 
    name: null,
    age: null,
    color: null
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addPerson(this.state)
  }
  render() { 
    return ( 
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='name'>Name </label>
          <input type='text' id='name' onChange={this.handleChange}/>
          <label htmlFor='age'>Age </label>
          <input type='text' id='age' onChange={this.handleChange}/> 
          <label htmlFor='color'>Color </label>
          <input type='text' id='color' onChange={this.handleChange}/> 
          <button>Submit</button> 
        </form>
      </div>
    )
  }
}
 
export default AddPerson