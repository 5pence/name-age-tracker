import React, {useState} from 'react'

const InputForm = (props) => {
    const[enteredName, setEnteredName] = useState();
    const[enteredAge, setEnteredAge] = useState();
    const [isNameValid, setNameIsValid] = useState(true);
    const [isAgeValid, setAgeIsValid] = useState(true);
    

    const formSubmitHandler = (event) => {
        event.preventDefault();
        props.onAddPerson(enteredName, enteredAge);
    }

    const onNameChangeInputHandler = (event) => {
        if (event.target.value.trim().length > 0) {
            setNameIsValid(true)
        }
        setEnteredName(event.target.value)
    }

    const onAgeChangeInputHandler = (event) => {
        if (event.target.value.trim().length > 0) {
            setAgeIsValid(true)
        }
        setEnteredAge(event.target.value)
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <label>Name</label>
            <input type='text'
                   onChange={onNameChangeInputHandler} />
            <label>Age</label>
            <input type='text'
                   onChange={onAgeChangeInputHandler} />
            <button type='submit'>Add Person</button>
        </form>
    )
}

export default InputForm