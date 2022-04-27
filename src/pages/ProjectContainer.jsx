import React from 'react'
import ProjectList from '../components/ProjectList'
import "../css/projects.css"

import "bootstrap/dist/css/bootstrap.min.css"
import NavbarCryFIn from '../components/NavbarCryFIn'
import Footer from '../components/Footer'

const ProjectContainer = () => {
  return (
    <div>
      <div>
        <NavbarCryFIn/>
      </div>
      <div className="container">
        <div className="row">
            <div className="col my-3">
                <h2 className="display-4 text-uppercase fst-italic text-center">Proyectos</h2>
            </div>
        </div> 

                <ProjectList/>
            
    </div>
    <div>
      <Footer/>
    </div>
    </div>
    
  )
}

export default ProjectContainer