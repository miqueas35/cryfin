import React from "react";
import invercionImg from "../img/Inversiones/inversiones.png";
import { Link } from "react-router-dom";

function ShowProyect() {
  return (
    <div>
      <div
        className="row row-cols-1 row-cols-md-3 col-10  offset-1 g-4"
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
              <h5 className="card-title">Churro's King</h5>
              <p className="card-text">
                Tenemos la iniciativa de llevar el auténtico sabor de los
                churros argentinos, sumados a la más exquisita cafetería, al
                exigente público canadiense.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
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
              <h5 className="card-title">ProJoystick</h5>
              <p className="card-text">
                Buscamos expandir nuestra empresa dedicada al mejoramiento y
                creación de mandos de juego profesionales para los gammers más
                exigentes. Apuntamos llegar a todo el mundo mediante un sistema
                de envíos internacionales.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
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
              <h5 className="card-title">Outline Holidays</h5>
              <p className="card-text">
                Queremos concretar la realización de un complejo vacacional
                dedicado a trabajadores de la industria IT que deseen tomarse un
                descanso de su rutina, ofreciendoles un lugar de relax lejos de
                cualquier conexión tecnológica.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
      </div>
      <div className="d-grid gap-2 col-6 mx-auto my-5">
        <Link className="btn" to="/projects">
          Ver todos los proyectos
        </Link>
        {/* <button  type="button"></button> */}
      </div>
    </div>
  );
}

export default ShowProyect;
