import React from 'react';

const DogListComponent = (props) => (
  <div>
    <h4> Dog List</h4>
    There are {props.dogs.length} dogs.
    {props.dogs.map(dog => {
      return <a key={dog.id}><li>{dog.name}</li></a>
    })}
  </div>
)

export default DogListComponent;