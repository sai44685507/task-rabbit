import { useState } from 'react';
import './App.css';
function App() {

  let [flag, setflag] = useState('');
  let [password, setPassword] = useState('')
  let [Name,setName] = useState('')
  const valid = () => {
    let name = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;
    if (name.size() < 8) {
      alert("UserName containing less than 8 characters");
    }

    if (flag === 1) {
      if (pass === " ") {
        alert("Password should not be empty");
      }

      if (!pass.match(password) && !name.match(Name)) {
        alert("wrong credentials");
      }
    }
  }

  const signup = () => {
    let name = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;
    setflag = 1;
    setName = name;
    setPassword = pass;


  }
  return (
    <div className="App">
      <form className="register">
        <h4>Login/Signup</h4>
        <div className="user">
          E-Mail: <input type="text" id="user" placeholder="Enter your E-mail" required></input>
        </div>
        <div className="pass">
          Password: <input type="password" id="pass" placeholder="Enter your password" required></input>
        </div>
        <div className="btn">
          <button onclick={valid}>Login</button>
          <button onclick={signup}>Signup</button>
        </div>
      </form>
    </div>
  );
}

export default App;
