import React from 'react'
import { Footer, Header } from '../layout'
import { NavLink } from 'react-router-dom'

const Login = () => {
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
                        <form autoComplete='off'>                            
                            <div className="form-group my-3">
                                <label for="email">Email Address</label>
                                <input
                                    type="email"
                                    class="form-control"
                                    id="email"
                                    name="email"
                                    placeholder="name@example.com"
                                />
                            </div>
                            <div className="form-group my-3">
                                <label for="password">Password</label>
                                <input
                                    type="password"
                                    class="form-control"
                                    id="Password"
                                    name="Password"
                                    placeholder="Password"
                                />
                            </div>
                            <div className="form-group my-3">
                                <p>New Here? <NavLink to={`/register`}>Register</NavLink></p>
                            </div>
                            <div className="form-group">
                                <button class="my-2 mx-auto btn btn-outline-dark" type="submit" disabled>
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