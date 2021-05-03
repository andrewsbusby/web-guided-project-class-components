import React, { useState } from "react";

const Person = () => {
  return(<div>
      <h1>Hello {name}. Age is equal to {age}.</h1>
      <h3>You're {name}!?!? {name} is a fantastic name! Never change it!!</h3>
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
      <Person/>
      <button onClick={handleClick}>Change the State!</button>
    </div>
  );
};

export default App;