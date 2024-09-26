import React from 'react'
import {Header, Footer} from '../layout'

const About = () => {
  return (
    <>
    <Header/>
    <div className="container my-3 py-3">
      <div className="row">
        <div className="col">
          <h5 className="display-5 text-center">About Us</h5>
          <hr />
        </div>
      </div>
    </div>
    <div className="container my-3 py-3">
      <div className="row">
        <div className="col text-center lead">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum facere doloremque veritatis odit similique sequi. Odit amet fuga nam quam quasi facilis sed doloremque saepe sint perspiciatis explicabo totam vero quas provident ipsam, veritatis nostrum velit quos recusandae est mollitia esse fugit dolore laudantium. Ex vel explicabo earum unde eligendi autem praesentium, doloremque distinctio nesciunt porro tempore quis eaque labore voluptatibus ea necessitatibus exercitationem tempora molestias. Ad consequuntur veniam sequi ullam tempore vel tenetur soluta dolore sunt maxime aliquam corporis est, quo saepe dolorem optio minus sint nemo totam dolorum! Reprehenderit delectus expedita a alias nam recusandae illo debitis repellat libero, quasi explicabo molestiae saepe, dolorem tempore itaque eveniet quam dignissimos blanditiis excepturi harum numquam vel nihil? Ipsum</p>
        </div>
      </div>
    </div>
    <div className="container my-3 py-3">
      <div className="row">
        <h5 className="display-6 text-center">Our Products</h5>
      </div>
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3 my-3">
          <div className="card h-100">
            <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
            <div className="card-body">
              <h5 className="card-title text-center">Mens's Clothing</h5>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3 my-3">
          <div className="card h-100">
            <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
            <div className="card-body">
              <h5 className="card-title text-center">Women's Clothing</h5>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3 my-3">
          <div className="card h-100">
            <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
            <div className="card-body">
              <h5 className="card-title text-center">Jewelry</h5>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3 my-3">
          <div className="card h-100">
            <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
            <div className="card-body">
              <h5 className="card-title text-center">Electronics</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default About