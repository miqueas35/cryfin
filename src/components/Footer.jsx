import React from 'react'
import Favicon from "../img/Favicon.png"
import social from "../img/social.png"

import "../css/footer.css"

import { Link } from 'react-router-dom'

const Footer = () => {
  return (
      <footer className='navbar-f navbar-expand-lg'>
          
          <div className='container justify-content-between align-items-center'>

            <div className="row">
              <div className="col-md-1 col-sm-12">
                { <Link to="/"> 
                  <img src={Favicon} alt="logo Coincap" className='img-footer'/>
                 </Link>  }  
              </div>

              <div className="col-md-5 col-sm-12 my-3 text-uppercase">
                <h4>Our vision</h4>
                <small>Nuestro objetivo es conectar personas para que sus sueños se hagan realidad.</small>
              </div>

              <div className="col-md-5 col-sm-12 my-3 text-uppercase"> 
                <h4>Follow us!</h4>
                <Link to="*">
                <img src={social} className="mt-3" alt="" />
                </Link>
              </div>

              <div className="col-md-1 col-sm-12 my-3">
              <Link className="btn mt-3" to="*">Join our newsteller</Link>
              </div>
            </div>
            </div>

      </footer>
  )
}

export default Footer