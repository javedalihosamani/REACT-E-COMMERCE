import React from 'react'
import {Header, Footer} from '../layout'

const Contact = () => {
  return (
    <>
    <Header/>
    <div className="container my-3 py-3">
      <div className="row">
        <div className="col">
          <h5 className="display-5 text-center">Contact Us</h5>
          <hr />
        </div>
      </div>
    </div>
    <div className="container mb-5">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6 offset-xxl-3 col-xxl-6">
          <div className="border rounded p-3 shadow">
            <form>
              <div className="form-group my-3">
                <label>Name</label>
                <input type="text" className="form-control" id="name" name='name' placeholder="Enter name" required />
              </div>
              <div className="form-group my-3">
                <label>Email</label>
                <input type="email" className="form-control" id="email" name='email' placeholder="Enter email" required />
              </div>
              <div className="form-group my-3">
                <label>Message</label>
                <textarea className="form-control" id="message" name='message' rows="3" placeholder="Enter message" required></textarea>
              </div>
              <div className="form-group my-3 text-center">
                <button type="submit" className="btn btn-outline-dark">Submit</button>
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

export default Contact