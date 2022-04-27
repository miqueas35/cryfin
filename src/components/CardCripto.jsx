import React from "react";
import '../css/criptoCard.css'

function CardCripto({cripto}) {
  return (
    
      <div className="card cardCripto mx-3 my-3" >
        <div className="row cripto ">
          <div className="col-2">
            <img src={cripto.logo_url} 
            className="img-cripto" 
            alt="..." />
          </div>
          <div className="col-6 d-flex align-items-center ">
            <p className="card-text" >{cripto.quote_rate}</p>
          </div>
        </div>
      </div>
    
  );
}

export default CardCripto;
