import "./App.css";
import { useState, useEffect } from "react";

import Home from "./pages/home";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/Javier")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Fail to fetch. Code: " + response.status);
        } else {
          return response.json();
        }
      })
      .then((data) => {
        console.log(data.name);
        setName(data.username);
        setAge(data.age);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <Home name={name} age={age} />
    </div>
  );
}

export default App;
