import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { Footer, Header } from '../layout';
import { AuthContext } from '../context/AuthContext';

const Register = () => {
    const [register, setRegister] = useState({
        name:'',
        email:'',
        mobile:'',
        password:''
    });

    const handleRegister = (e) => {
        const {name,value} = e.target;
        setRegister({...register, [name]:value});
    }

    const context  = useContext(AuthContext);

    const submitRegister = (e) => {
        e.preventDefault();
        //console.log(register);

        // API call to register user
        context.registerUser(register);
    }
  return (
    <>
        <Header/>
        <div className="container my-3 py-3">
            <div className="row">
                <div className="col">
                    <h5 className="display-5 text-center">Register</h5>
                    <hr />
                </div>
            </div>
        </div>
        <div className="container my-3">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6 offset-xxl-3 col-xxl-6  ">
                    <div className="border rounded p-3 shadow">
                        <form autoComplete='off' onSubmit={submitRegister}>
                            <div className="form-group my-3">
                                <label>Full Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    placeholder="Enter Your Name"
                                    onChange={handleRegister}
                                />
                            </div>
                            <div className="form-group my-3">
                                <label>Email Address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    placeholder="name@example.com"
                                    onChange={handleRegister}
                                />
                            </div>
                            <div className="form-group my-3">
                                <label>Mobile Number</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="mobile"
                                    name="mobile"
                                    placeholder="9876543210"
                                    onChange={handleRegister}
                                />
                            </div>
                            <div className="form-group my-3">
                                <label>Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    name="password"
                                    placeholder="Password"
                                    onChange={handleRegister}
                                />
                            </div>
                            <div className="form-group my-3">
                                <p>Already has an account? <NavLink to={`/login`}>Login</NavLink></p>
                            </div>
                            <div className="form-group">
                                <button className="my-2 mx-auto btn btn-outline-dark" type="submit">
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default Register