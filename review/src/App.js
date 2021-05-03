import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("Warren");
  const [age, setAge] = useState(33);

  const handleClick = ()=>{
    setName("Allison");
    setAge(12);
  }

  return (
    <div>
      <h1>Hello {name}. Age is equal to {age}.</h1>
      <h3>You're {name}!?!? {name} is a fantastic name! Never change it!!</h3>
      <button onClick={handleClick}>Change the State!</button>
    </div>
  );
};

export default App;