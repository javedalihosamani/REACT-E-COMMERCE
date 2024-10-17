import React, { useContext, useState } from 'react'
import { Footer, Header } from '../layout'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const Login = () => {
    const [login,setLogin] = useState({
        email: "",
        password: ""
    })
    const handleLogin = (e) => {
        const {name,value} = e.target;
        setLogin({...login, [name]:value});
    }

    let context = useContext(AuthContext)
    const submitLogin = (e) => {
        e.preventDefault();
        context.loginUser(login);
    }

  return (
    <>
        <Header/>
        <div className="container my-3 py-3">
            <div className="row">
                <div className="col">
                    <h5 className="display-5 text-center">Login</h5>
                    <hr />
                </div>
            </div>
        </div>
        <div className="container my-3">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6 offset-xxl-3 col-xxl-6  ">
                    <div className="border rounded p-3 shadow">
                        <form autoComplete='off' onSubmit={submitLogin}>                            
                            <div className="form-group my-3">
                                <label>Email Address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    placeholder="name@example.com"
                                    onChange={handleLogin}
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
                                    onChange={handleLogin}
                                />
                            </div>
                            <div className="form-group my-3">
                                <p>New Here? <NavLink to={`/register`}>Register</NavLink></p>
                            </div>
                            <div className="form-group">
                                <button className="my-2 mx-auto btn btn-outline-dark" type="submit">
                                    Login
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

export default Login