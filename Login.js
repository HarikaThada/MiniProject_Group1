import React, { useState } from "react";
import Axios from "axios";
import { Link, useHistory } from "react-router-dom";


function Login() {
    let history = useHistory();
    const [userName, setUserName] = useState(() => {
		// getting stored value
		const saved = localStorage.getItem("name");
		const initialValue = JSON.parse(saved);
		return initialValue || "";
		
	  })

    const [emailLogin, setEmailLogin] = useState("");
    const [passwordLogin, setPasswordLogin] = useState("");
    const [loginStatus, setLoginStatus] = useState("");
   const [name,setname]=useState("")


    const getLogin = () => {
        Axios.post("http://localhost:3001/loginDb", {

            email: emailLogin,
            password: passwordLogin,
            fname:name
        }).then((response) => {      
            if (response.data.message) {
             setLoginStatus(response.data.message)
            }else{
                alert("LOGIN SUCCESS")
                setLoginStatus(response.data[0].email);
                setname(response.data[0].fname)
                history.push("/home");
         }

            });
    };



    return (
        <div className="Reg">
            <div id="register">
            <h1>Login</h1>
            <label for="email">Email Id:</label>
            <input type="email" id="email" name="email" onChange={(event) => { setEmailLogin(event.target.value); }} required /><br />
            <br/>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" onChange={(event) => { setPasswordLogin(event.target.value); }} /><br /><br />
            <br />
            <button type="submit" value="Register" onClick={getLogin}> Login </button>
            <p color="red">{loginStatus}</p>
            <br></br>

            <p>NEW USER</p>
            <button>
            <Link to="/register">Register</Link>
            </button>
            </div>
        </div>
    );
}
export default Login;