import React from "react";
import '../css/criptoCard.css'

function CardCripto({cripto}) {
  return (
    
      <div className="card cardCripto" >
        <div className="row g-0 cripto ">
          <div className="col-2">
            <img src={cripto.logo_url} className="img-fluid" alt="..." />
          </div>
          <div className="col-6 d-flex align-items-center justify-content-center ">
            <p className="card-text  ">{cripto.quote_rate}</p>
          </div>
        </div>
      </div>
    
  );
}

export default CardCripto;
