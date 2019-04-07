import People from './components/People'
import AddPerson from './components/AddNewPerson'
import React, { Component } from 'react'
import './App.css'

class App extends Component {
  state = {
    people: [
     { name: 'lisa', age: 65, color: 'green', id: '1'},
     { name: 'karl', age: 7, color: 'blue', id: '2'},
     { name: 'anna', age: 34, color: 'pink', id: '3'}
    ]
  }

  addPerson = (person) => {
    person.id = Math.random()
    const newPerson = [...this.state.people, person]

    this.setState({
      people: newPerson
    })
  }

  render() {
    return (
      <div className="App">
      <People people={this.state.people} />
      <AddPerson addPerson={this.addPerson} />
      </div>
    )
  }
}

export default App
