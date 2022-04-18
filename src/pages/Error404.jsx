import React from 'react'
import error404 from "../img/error404.png"
import "../css/error404.css"

const Error404 = () => {
  return (
    <div className="container">
        <div className="row">
            <div className="col">
                <img src={error404} alt="Error 404" className='img-Error' />
            </div>
          </div>
    </div>
)
}

export default Error404