import React from 'react'
import { projectList } from '../datos/projects'
import ProjectItem from './ProjectItem'

const ProjectList = () => {
  return (
    <div className='row'>
        {projectList.map(item=>(

            <ProjectItem key={item.id} item={item}/>

            ))}
    </div>
  )
}

export default ProjectList