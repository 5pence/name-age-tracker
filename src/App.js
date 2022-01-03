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
    console.log('here: ', enteredName, enteredAge);
    setPeople(prevPeople => {
      let updatedPeople = [...prevPeople];
      updatedPeople.push({name: enteredName, 
                          age: enteredAge,
                          id: Math.random().toString()  });
      return updatedPeople;
    })
  }

  return (
    <div className="App">
      <InputForm onAddPerson={onAddPerson} />
      <PersonList items={people} />
    </div>
  );
}

export default App;
