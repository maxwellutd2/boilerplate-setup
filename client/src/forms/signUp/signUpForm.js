import React, { useState } from "react";
import "./signUpForm.css";
import API from "../../utils/api";


function SignUpForm() {
    //establishing form values
    const [formObject, setformObject] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    })

    //targeting form values 
    function handleInputChange(event) {
        const { name, value } = event.target;
        setformObject({
            ...formObject,
            [name]: value
        })
    }
  
    //upon loging, use API to autheticate user
    const handleFormSubmit = (e) => {
        console.log("handling submit");
        e.preventDefault();
        if (formObject.email && formObject.password && formObject.firstName) {
            API.create({
                firstName: formObject.firstName,
                lastName: formObject.lastName,
                email: formObject.email,
                password: formObject.password,
            })
            .then(() => {
                setformObject({
                    firstName: "",
                    lastName: "",
                    email: "",
                    password: ""
                })
                window.location.href = "/profile";
            })
            .catch(err => console.log(err));
        } else {
            console.log("missing validation");
        }
    }

    return (
        <div className="imgDiv">
            <div className="container">
                 <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <h2>Sign Up Form</h2>
                        <form className="signup" onSubmit={handleFormSubmit}>
                            <div className="form-group name">
                                <label htmlFor="exampleInputEmail1">First Name</label>
                                <input 
                                    onChange={handleInputChange} 
                                    name="firstName"
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Name*" />
                            </div>                            
                            <div className="form-group name">
                                <label htmlFor="exampleInputEmail1">Last Name</label>
                                <input 
                                    onChange={handleInputChange} 
                                    name="lastName"
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Name*" />
                            </div>
                            <div className="form-group email">
                                <label htmlFor="exampleInputEmail1">Email</label>
                                <input 
                                    onChange={handleInputChange}
                                    name="email" 
                                    type="email" 
                                    className="form-control"  
                                    placeholder="user@gmail.com.au*"/>
                            </div>
                            <div className="form-group password">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input 
                                    onChange={handleInputChange}
                                    name="password" 
                                    type="password" 
                                    className="form-control" 
                                    placeholder="Password* (must be longer than 6 characters)"/>
                            </div>
                            <br/>
                            <button type="submit" className="btn btn-default" onClick={handleFormSubmit}>Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUpForm;