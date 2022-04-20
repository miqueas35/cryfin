import React from 'react'
import CardCripto from "./CardCripto";
import "../css/carousel.css";


const CarouselCripto = ({cripto}) => {

  console.log(cripto);
    
  return (
        <div className="conteiner">
          <div className="row">
            <div className="col d-flex">
              {cripto.data.map((cripto, index) => (
                <CardCripto key={index} cripto={cripto}  />
              ))}
            </div>
          </div>
        </div>
    
  )
}

export default CarouselCripto