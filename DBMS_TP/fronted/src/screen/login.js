import React, { useState, useContext } from 'react';
import {UserContext} from '../App'

import { NavLink, useHistory } from 'react-router-dom';


const Login = () => {
    const { state, dispatch } = useContext(UserContext);

    const history = useHistory();
    const [password, setPasword] = useState("")
    const [email, setEmail] = useState("")
    const PostData = () => {

        fetch("/signin", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                password,
                email
            })
        }).then(res => res.json())
            .then(data => {
                console.log(data);

                if (data.error) {
                    console.log(data.error);
                } else {
                    localStorage.setItem("jwt", data.token)
                    localStorage.setItem("user", JSON.stringify(data.user))
                    dispatch({ type: "USER", payload: "data.user" });
                    console.log("login successfully...");
                    history.push("/");
                }
            }).catch(err => {
                console.log(err);
            })
    }






    return (
        <div className="mycard" style={{ background: "#DCDCDC", width: "30%", marginLeft: "530px", marginTop: "120px" }}>
            <div className="card container auth-card">
                <h1 className="head">Login Account</h1>
                <br/>
                <input
                    style={{ fontWeight: "800", padding:"0.2rem", textAlign: "left", paddingTop: "0.3rem", paddingBottom: "0.3rem", border: "2px solid blue", background: "white", color: "black" }}
                    type="text"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <br />
                <input
                    style={{ fontWeight: "800", padding: "0.2rem",textAlign:"left",paddingTop:"0.3rem",paddingBottom:"0.3rem", border: "2px solid blue", background: "white", color: "black" }}
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPasword(e.target.value)}
                />
                <br />
                <br />
                <button style={{ padding: "0.3rem", paddingLeft: "78px", paddingRight: "78px", fontWeight: "600", fontSize: "1rem", border: "2px solid blue", background: "black", color: "white" }} className="btn btn-outline-primary"
                   onClick={()=>PostData()}
                >
                    Login
                </button>
                <br/>
                <br/>

                <h5 className="p1 mt-4"><NavLink style={{ textDecoration: "none" , fontSize:"1rem",color:"black"}} to="/signup">Dont have an account ? Signup</NavLink></h5>

            </div>

        </div>
    )
}
export default Login;