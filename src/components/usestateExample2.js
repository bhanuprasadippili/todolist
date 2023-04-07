import React, { useState } from "react";


function Eaxmple2() {

    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    const [values , setValues ] = useState({
        name : "",
        email : "",
        password : ""
    })

    // const changeName = (e)=>{
    //     setName(e.target.value);
    // }
    // const changeEmail = (e)=>{
    //     setEmail(e.target.value);
    // }
    // const changePassword = (e)=>{
    //     setPassword(e.target.value);
    // }


    const handleInputChange = (e) => {
       if(e.target.name === "name")
       {
        console.log(e.target.value)
        setValues({...values , name : e.target.value});
       }
       if(e.target.name === "email")
       {
        console.log(e.target.value)
        setValues({...values , email : e.target.value});
       }
       if(e.target.name === "password")
       {
        console.log(e.target.value)
        setValues({...values , password : e.target.value});
       }
    }



    const handleSubmit = (e) => {
        e.preventDefault();

        let data = {
            name: values.name,
            email: values.email,
            password: values.password
        }
        console.log(data);
    }


    return (
        <div>

            <form onSubmit={handleSubmit}>
                <input type="text" name = "name" placeholder="Enter your Name" value={values.name} onChange={(e) => handleInputChange(e)} />
                <input type="email" name="email" placeholder="Enter your Email" value={values.email} onChange={(e) => handleInputChange(e)} />
                <input type="password" name="password" placeholder="Enter your password" value={values.password} onChange={(e) => handleInputChange(e)} />
                <button>SUBMIT</button>
            </form>

        </div>
    )
}
export default Eaxmple2;