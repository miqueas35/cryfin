import React from 'react'
import Favicon from "../img/Favicon.png"

import "../css/footer.css"

import { Link } from 'react-router-dom'

const Footer = () => {
  return (
      <footer className='navbar navbar-expand-lg navbar-dark bg-dark'>
          
          <div className='container justify-content-between'>

            <div className="row">
              <div className="col-md-1 col-sm-12">
                {/* <Link to="/"> */}
                  <img src={Favicon} alt="logo Coincap" className='img-footer'/>
                {/* </Link>  */}  
              </div>

              <div className="col-md-5 col-sm-12 my-3 text-uppercase">
                <h4>Our vision</h4>
                <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime harum voluptate doloremque incidunt commodi. Corrupti maxime consequuntur distinctio fugit ullam.</small>
              </div>

              <div className="col-md-5 col-sm-12 my-3 text-uppercase"> 
                <h4>Follow us!</h4>
                <small>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus, natus.</small>
              </div>

              <div className="col-md-1 col-sm-12 my-3">
                <button type="button" className="btn btn-outline-light text-uppercase">Join our newsteller</button>
              </div>
            </div>
            </div>

      </footer>
  )
}

export default Footer