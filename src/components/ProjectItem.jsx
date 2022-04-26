import React from 'react'

const ProjectItem = (props) => {

    const{item}=props;

  return (
            <div className="col-4 card mb-3">
                <img src={item.url} className="img-fluid" alt={item.alt}/>
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.description}</p>
                    <p className="card-text">
                        <small className="text-muted">Author: {item.author}</small>
                    </p>
                    <div className='text-end'>
                    <button type="button" className="btn btn-outline-primary w-50">Invertir</button> 
                    </div>
                </div>
            </div>
  )
}

export default ProjectItem