import React, { useState } from "react";

const Person = (props) =>{
  return(
    <div>
      <h1>Hello {props.name}. Age is equal to {props.age}</h1>
      <h3>You're {props.name}!? {props.name} is a fantastic Name. Never change it.</h3>
    </div>
  )
}
const App = () => {
  const [name, setName] = useState('Andrew');
  const [age, setAge] = useState(32);
  const handleChange = ()=>{
    setName('Busby');
    setAge(16);
  }

  return (
    <div>
      <Person name={name} age={age}/>
      <button onClick={handleChange}>Change the State!</button>
    </div>
  );
};

export default App;