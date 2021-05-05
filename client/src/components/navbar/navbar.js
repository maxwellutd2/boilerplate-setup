import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Mend</a>
                    <div className="collapse navbar-collapse mr-auto" id="navbarNavAltMarkup">
                    <ul className="medium-horizontal align-right text-black" id="nav-menu">
                            <li className="nav-item">
                                <Link to="/dashboard" className={window.location.pathname === "/" || window.location.pathname === "/members"
                                    ? "nav-link active"
                                    : "nav-link"
                                    }
                                >Home</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/symptoms" className={window.location.pathname === "/symptoms" 
                                    ? "nav-link active" 
                                    : "nav-link"
                                    }
                                >Symptoms</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/treatments" className={window.location.pathname === "/treatment" 
                                    ? "nav-link active" 
                                    : "nav-link"
                                    }
                                >Treatment</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/diagnosis" className={window.location.pathname === "/diagnosis" 
                                    ? "nav-link active" 
                                    : "nav-link"
                                    }
                                >Diagnosis</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/login" className={window.location.pathname === "/diagnosis"
                                    ? "nav-link active" 
                                    : "nav-link"
                                    }
                                >Logout</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;