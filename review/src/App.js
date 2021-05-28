import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState('Andrew');
  const [age, setAge] = useState(32);
  return (
    <div>
      <h1>Hello {name}. Age is equal to {age}</h1>
    </div>
  );
};

export default App;