import React from 'react'

// handleClick = (e) => {
//     this.setState({
//         todos: 'Nils'
//     })
//     console.log(this.state)
// }


// handleMouseOver = (e) => {
//     console.log(e, e.pageX)
// }


// handleChange = (e) => {
//     this.setState({
//         todos: e.target.value
//     })
// }


// handleSubmit = (e) => {
//     e.preventDefault()
// }

// UI function, no state in mind
const People = ({ people }) => {
    const peoplesList = people.map(person => {
        return (
            <div id='people' key={person.id}>
            <ul>
                <li>Name: {person.name}</li>
                <li>Age: {person.age}</li>
                <li>Color: {person.color}</li>
            </ul>
            </div>
        )
    })
    return (
        <div className='list'>
            { peoplesList }
        </div>
    )
}

export default People
