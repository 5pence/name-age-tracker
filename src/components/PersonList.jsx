import React from "react";
import PersonItem from "./PersonItem";

const PersonList = (props) => {
  return (
    <div className="lister">
      <ul>
        {props.items.map((person) => (
          <PersonItem key={person.id} id={person.id}>
            {person.name} is {person.age} years old.
          </PersonItem>
        ))}
      </ul>
    </div>
  );
};

export default PersonList;
