import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("Warren");

  return (
    <h1>Hello {name}.</h1>
  );
};

export default App;