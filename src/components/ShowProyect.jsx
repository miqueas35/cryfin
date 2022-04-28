import React from "react";
import invercionImg from "../img/Inversiones/inversiones.png";

function ShowProyect() {
  return (
    <div>
      <div
        className="row row-cols-1 row-cols-md-3 col-10  offset-1 g-4 mt-3"
        id="proyect"
      >
        <div className="col">
          <div className="card h-100">
            <img
              src="https://www.spain.info/export/sites/segtur/.content/imagenes/cabeceras-grandes/recetas/churros_chocolate_s56639251.jpg_1014274486.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Proyecto 1</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                recusandae, assumenda et fuga impedit numquam nulla suscipit
                blanditiis labore at quod dolor nam in ad, ut incidunt amet ex
                aspernatur.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Fondos necesarios:</small>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src="https://images.pexels.com/photos/1298601/pexels-photo-1298601.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Proyecto 2</h5>
              <p className="card-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa
                beatae sed praesentium laudantium facere, quasi sapiente? Sit
                repellendus, unde et incidunt eius, facere perferendis vitae rem
                tenetur quidem dolores nisi?
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Fondos necesarios:</small>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src="https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Proyecto 3</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit possimus adipisci similique delectus placeat
                repellendus commodi! Voluptatibus debitis quaerat obcaecati odio
                laudantium quo eaque atque quos, autem, sit accusamus ad?
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Fondos necesarios:</small>
            </div>
          </div>
        </div>
      </div>
      <div className="d-grid gap-2 col-6 mx-auto mt-5">
        <button className="btn" type="button">
          Ver todos los proyectos
        </button>
      </div>
    </div>
  );
}

export default ShowProyect;
