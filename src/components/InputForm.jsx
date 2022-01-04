import React, { useState } from "react";
import Modal from "./Modal";

const InputForm = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  let [isNameValid, setNameIsValid] = useState(true);
  const [isAgeValid, setAgeIsValid] = useState(true);

  const clearform = () => {
    setEnteredName("")
    setEnteredAge("")
}
  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (event.target[0].value.length === 0) {
        setNameIsValid(false);
        return;
    }
    if (event.target[1].value.length === 0 || 
        event.target[1].value < 0 ||
        isNaN(event.target[1].value) ) {
        setAgeIsValid(false);
        return;
    }
    props.onAddPerson(enteredName, enteredAge);
    clearform();
  };

  

  const onNameChangeInputHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const onAgeChangeInputHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const closeModal = () => {
      setNameIsValid(true);
      setAgeIsValid(true);
  }

  return (
    <div className="inputter">
      <form className="former" onSubmit={formSubmitHandler}>
        
        <label>Name</label>
        <input value={enteredName} type="text" onChange={onNameChangeInputHandler} />
        <br />
        <label>Age</label>
        <input value={enteredAge} type="text" onChange={onAgeChangeInputHandler} />
        <br />
        <button className="submitter" type="submit">Add Person</button>
      </form>
      {!isNameValid ? <Modal close={closeModal} text='Name must be a valid string (not an empty string)'/> : ''}
      {!isAgeValid ? <Modal close={closeModal} text='Age must be a valid non-empty positive number' /> : ''}
      {!isNameValid & !isAgeValid ? <Modal close={closeModal} text='Must be a valid non-empty name and valid non-empty positive number for age' /> : ''}
      
    </div>
  );
};

export default InputForm;
