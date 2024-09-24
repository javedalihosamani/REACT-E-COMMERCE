import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Footer = () => {
  return (
    <div className="bg-light">
        <div className="container">
            <div className="row">
                <div className="col p-5 text-center">
                    <p className='text-dark fs-5'>Copyright © 2024, Javed Ali</p>
                    <a href="https://github.com/javedalihosamani" className='text-dark fs-4'>
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;