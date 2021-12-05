import React, { useState,useEffect } from "react";
import Axios from "axios";
import { Link, useHistory } from "react-router-dom";

function Register() {
    let history = useHistory();
    const [fname, setFname] = useState("");
    
  
    const [email, setEmail] = useState("");
   
    const [password, setPassword] = useState("");
const [local,setLocal]=useState({})
    let userDetails =     localStorage.setItem("name", JSON.stringify(fname));

    useEffect(() => {
        // storing input name
   

      }, [email]);

    const addRegister = () => {
        Axios.post("http://localhost:3001/register", {
            fname: fname,
            email: email,
            password: password
        }).then((res) => {
            if(res){
                alert("Successfully Registered")
                setLocal(userDetails);
                 history.push("/");
            }
        });
    };

   


    return (
        <div className="Reg">
            <div id="register">
                <h1>Register</h1>
            <label for="fname">UserName:</label>
            <input type="text" id="fname" name="fname" onChange={(event) => { setFname(event.target.value); }} required /><br />
            <br />
            <label for="email">Email Id:</label>
            <input type="email" id="email" name="email" onChange={(event) => { setEmail(event.target.value); }} required /><br />
            <br />
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" onChange={(event) => { setPassword(event.target.value); }} /><br /><br />
            <br />
            <button type="submit" value="Register" onClick={addRegister}> Register </button>


            <br></br>
            <p>Already Registered?</p>
            <button>
            <Link to="/">Login</Link>
            </button>
           </div>
        </div>
    );
}
export default Register;