import { Link } from "react-router-dom";
import { useState } from "react";

function User(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNumber, setMobile] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(event);
        try{
            let res = await fetch("http://127.0.0.1:4000/getUser", {
                method: "GET",
                body: JSON.stringify({
                    name: name,
                    email: email,
                    mobileNumber: mobileNumber,
                }),
            });

            let resJson = await res.json();
            if (res.status === 200) {
                setName("");
                setEmail("");
                setMobile("");
                setMessage("User created successfully");
            } else {
                setMessage("Some error occured");
            }
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <label>Enter your name:
                    <input 
                    type="text" 
                    value={name}
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                    />
                </label><br></br>
                <label>Enter your email:
                    <input 
                    type="text" 
                    value={email}
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </label><br></br>
                <label>Enter your mobile number:
                    <input 
                    type="text" 
                    value={mobileNumber}
                    placeholder="Mobile Number"
                    onChange={(e) => setMobile(e.target.value)}
                    />
                </label><br></br>
                <input type="submit" />
                <div className="message">{message ? <p>{message}</p> : null}</div>
            </form>
        </div>
    )
}

export default User;