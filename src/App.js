import React, {useState} from 'react';
import './App.css';
import InputForm from './components/InputForm';
import PersonList from './components/PersonList';

function App() {

  const [people, setPeople] = useState([
    { name: 'Spencer', age: '50', id: 's1'},
    { name: 'Jane', age: '62', id: 'j1'}
  ]);

  const onAddPerson = (enteredName, enteredAge) => {
    const data = {name: enteredName, 
      age: enteredAge,
      id: Math.random().toString() 
     }
    setPeople(prevPeople => [...prevPeople, data])
    }

  return (
    <div className="app">
      <InputForm onAddPerson={onAddPerson} />
      <PersonList items={people} />
    </div>
  );
}

export default App;
