import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    console.log("Hello World");
  };

  return (
    <div className="App">
      <header className="App-header"></header>
      <body>
        <form onSubmit={handleSubmit}>
          <label>
            Username:{" "}
            <input
              type="text"
              value={username}
              onChange={handleUsernameChange}
            />
          </label>
          <label>
            Password:{" "}
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </label>
          <button type="submit">Login</button>
        </form>
      </body>
    </div>
  );
}

export default App;
