import React from 'react'
import PersonItem from './PersonItem'

const PersonList = (props) => {
    return (
        <ul>
            {props.items.map(person => (
                <PersonItem
                 key={person.id}
                 id={person.id}
                >
                    {person.name} is {person.age} years old.
                </PersonItem> 
            ))}
        </ul>
    )
}

export default PersonList
