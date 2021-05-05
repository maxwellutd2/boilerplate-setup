import React, { useState } from "react";
import "./loginForm.css";
import API from "../../utils/api";

function LoginForm() {
       //establishing form values
       const [formObject, setformObject] = useState({
        email: "",
        password: ""
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
        e.preventDefault();
        if (formObject.email && formObject.password) {
            API.login({
                email: formObject.email,
                password: formObject.password
            })
            .then((res) => {
                setformObject({
                    email: "",
                    password: ""
                })
                window.location.href = "/profile";
            })
            .catch(err => console.log(err));
        }
    }

    return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <h2>Login Form</h2>
                        <form className="login" onSubmit={handleFormSubmit}>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email</label>
                                <input 
                                    onChange={handleInputChange}
                                    type="text" 
                                    name="email" 
                                    className="form-control" 
                                    placeholder="Username"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input 
                                    onChange={handleInputChange}
                                    type="password" 
                                    name="password" 
                                    className="form-control" 
                                    placeholder="Password"/>
                            </div>
                            <button type="submit" className="btn btn-default">Login</button>
                        </form>
                        <h3>Not a member? <a href="/signup">Sign up here</a></h3>
                    </div>
                </div>
            </div>
    )
}
export default LoginForm;