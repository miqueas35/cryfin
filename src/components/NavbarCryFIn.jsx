import React from 'react'
import Logo from"../img/Logo.png"
import {Link} from "react-router-dom"

import "../css/navbar.css"


const NavbarCryFIn  = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark"> 
      <div className="container">
        
        { <Link to="/"> 
          <img src={Logo} alt="logo CryFIn" className='img-logo' />
         </Link>  }
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item m-4 text-uppercase">
              { <Link to="/login"> 
                Login
               </Link>}
            </li>
            <li className="nav-item m-4 text-uppercase">
              { <Link to="/about"> 
                Sobre Nosotros
               </Link>}
            </li>
            <li className="nav-item m-4 text-uppercase">
              { <Link to="/modal"> 
                User
               </Link>   }
            </li>
            <li className="nav-item m-4 text-uppercase">
              { <Link to="*">  
                News
               </Link>  }
            </li>
            <li className="nav-item m-4 text-uppercase">
              { <Link to="*"> 
                CryptoCurrecy
               </Link>  }
            </li>
            <li className="nav-item m-4 text-uppercase">
              { <Link to="/">   
                Log Out
               </Link> }
            </li>
          </ul>
      </div>
      </div>
    </nav>
    )
}

export default NavbarCryFIn 