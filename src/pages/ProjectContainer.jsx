import React from "react";
import ProjectList from "../components/ProjectList";
import "../css/projects.css";

import "bootstrap/dist/css/bootstrap.min.css";
import NavbarCryFIn from "../components/NavbarCryFIn";
import Footer from "../components/Footer";

const ProjectContainer = () => {
  return (
    <div>
      <div>
        <NavbarCryFIn />
      </div>
      <div className="container container-main">
        <div className="row">
          <div className="col my-3">
            <h2 className="display-4 text-center">Proyectos</h2>
          </div>
        </div>

        <div className="row">
          <div className="d-grid gap-2 col-6 mx-auto mb-5">
            <button className="btn">Publicar nuevo proyecto</button>
          </div>
        </div>

        <ProjectList />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default ProjectContainer;
