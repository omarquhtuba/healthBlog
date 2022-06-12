import axios from 'axios';
import React, { useState } from 'react'

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleClick = async () => {
        try {
          const newUser = {
            name,
            email,
            password
          };
    
          await axios.post("http://localhost:3000/api/register", newUser);
        } catch (err) {
          console.log(err);
        }
      };
    return (
        <div>
            <h1>Login</h1>
            <div>
            <div>
                    <label>Name</label>
                    <input type="text" placeholder="Username" onChange={(e) => setName(e.target.value)}/>
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" placeholder="Username" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div>
                    <label>Password</label>
                    <input  placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button onClick={handleClick}>singUp</button>
            </div>
        </div>
      )
}

export default Register