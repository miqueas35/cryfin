import React from 'react'
import Logo from"../img/Logo.png"
import {Link} from "react-router-dom"

import "../css/navbar.css"


const NavbarCryFIn  = () => {
    return (
        <>
        <nav id="navbar" className="navbar navbar-expand-lg">
    
        <div className="container">
            {/* <Link to="/"> */}
            <img src={Logo} alt="logo CryFIn" className='img-logo' />
            {/* </Link>  */}
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav">
    
            <ul className="navbar-nav">
              <li className="nav-item text-uppercase">
                {/* <Link to="/"> */}
                Home
                {/* </Link> */}
              </li>
              
              <li className="nav-item text-uppercase">
                {/* <Link to="/">  */}
                User
                {/* </Link>   */}
              </li>
              
              <li className="nav-item text-uppercase">
                {/* <Link to="/">  */}
                News
                {/* </Link>  */}
              </li>
    
              <li className="nav-item text-uppercase">
                {/* <Link to="/"> */}
                CryptoCurrecy
                {/* </Link>  */}
              </li>
            </ul>

            <div>
                {/* <Link to="/">   */}
                    <button type="button" className="btn btn-outline-light text-uppercase">Log Out</button>
                {/* </Link>  */}
            </div>
            
          </div>
        </div>
      </nav>
    </>
    )
}

export default NavbarCryFIn 