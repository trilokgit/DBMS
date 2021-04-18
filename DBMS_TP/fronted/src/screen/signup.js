import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';




const Signup = () => {
    const history = useHistory();
    const [name, setName] = useState("")
    const [password, setPasword] = useState("")
    const [email, setEmail] = useState("")
    // const [image, setimage] = useState("");
    const [url, seturl] = useState(undefined);

    useEffect(() => {
        if (url) {
            uploadFields();
        }
    }, [url])

    // const uploadPic = () => {
    //     const data = new FormData();
    //     data.append("file", image);
    //     data.append("upload_preset", "insta-clone");
    //     data.append("cloud_name", "dpblyzl1t");
    //     fetch("	https://api.cloudinary.com/v1_1/dpblyzl1t/image/upload", {
    //         method: "post",
    //         body: data
    //     }).then(res => res.json())
    //         .then(data => {
    //             seturl(data.url);
    //         }).catch(err => {
    //             console.log(err);
    //         })
    // }

    const uploadFields = () => {
        fetch("/signup", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                password: password,
                email: email,
               
            })
        }).then(res => res.json())
            .then(data => {
                if (data.error) {
                    console.log(data.error);
                } else {
                    history.push("/login");
                }
            }).catch(err => {
                console.log(err);
            })
    }
    const PostData = () => {    
            uploadFields();
    }


    return (
        <div className="mycard" style={{ background:"#DCDCDC",width:"30%", marginLeft:"530px",marginTop:"120px"}}>
            <div className="card auth-card input-field">
                <h2>Create Account</h2>
                <br />
                <input
                    style={{fontWeight:"800",padding: "0.2rem", textAlign: "left", paddingTop: "0.3rem", paddingBottom: "0.3rem", border: "2px solid blue", background: "white", color: "black" }}
                    type="text"
                    placeholder="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <br />
                <br/>
                <input
                    style={{ fontWeight: "800",padding: "0.2rem", textAlign: "left", paddingTop: "0.3rem", paddingBottom: "0.3rem", border: "2px solid blue", background: "white", color: "black" }}
                    type="text"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <br />
                <input
                    style={{ fontWeight: "800", padding: "0.2rem", textAlign: "left", paddingTop: "0.3rem", paddingBottom: "0.3rem", border: "2px solid blue", background: "white", color: "black" }}
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPasword(e.target.value)}
                />
                <br />
                <br />
                
              
                <button style={{padding:"0.3rem", paddingLeft:"72px",paddingRight:"72px" ,fontWeight:"600",fontSize:"1rem", border:"2px solid blue" ,background:"black",color:"white"}} className="btn btn-outline-warning"
                    onClick={()=>PostData()}
                >
                    SignUP
                </button>
                <br />
                <br />
                <h5>
                    <Link style={{textDecoration:"none" , fontSize:"1rem",color:"black"}} to="/login">Already have an account ? Login</Link>
                </h5>





            </div>
        </div>
    )
}

export default Signup;