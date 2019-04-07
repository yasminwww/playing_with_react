import Todos from './components/Todos'
import React, { Component } from 'react'
import './App.css'

class App extends Component {
  state = {
    people: [
     { name: 'lisa', age: 65, color: 'green'},
     { name: 'karl', age: 7, color: 'blue'},
     { name: 'anna', age: 34, color: 'pink'}
    ]
  }
  render() {
    return (
      <div className="App">
      <Todos people={this.state.people} />
      </div>
    )
  }
}

export default App
