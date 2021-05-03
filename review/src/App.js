import React, { useState } from "react";

const Person = (props) => {
  return(<div>
      <h1>Hello {props.name}. Age is equal to {props.age}.</h1>
      <h3>You're {props.name}!?!? {props.name} is a fantastic name! Never change it!!</h3>
  </div>);
}

const App = () => {
  const [name, setName] = useState("Warren");
  const [age, setAge] = useState(33);

  const handleClick = ()=>{
    setName("Allison");
    setAge(12);
  }

  return (
    <div>
      <Person name={name} age={age}/>
      <button onClick={handleClick}>Change the State!</button>
    </div>
  );
};

export default App;