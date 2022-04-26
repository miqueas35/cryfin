import React from 'react'
import ProjectList from './ProjectList'
import "../css/projects.css"

import "bootstrap/dist/css/bootstrap.min.css"

const ProjectContainer = () => {
  return (
    <div className="container">
        <div className="row">
            <div className="col my-3">
                <h2 className="display-4 text-uppercase fst-italic text-center">Proyectos</h2>
            </div>
        </div> 

                <ProjectList/>
            
    </div>
  )
}

export default ProjectContainer