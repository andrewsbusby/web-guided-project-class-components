import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("Warren");
  const [age, setAge] = useState(33);

  return (
    <div>
      <h1>Hello {name}. Age is equal to {age}</h1>
      <button>Change the State!</button>
    </div>
  );
};

export default App;