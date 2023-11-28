import React, { useState } from 'react'
import { Card, Col, Modal, Row } from 'react-bootstrap'
import projectPic from '../Assests/software.jpg'
import { BASE_URL } from '../Services/baseurl';


function ProjectCard({project}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
    {project&& 
    <Card onClick={handleShow} className='shadow mb-5 btn' style={{ width: '20rem',height:"17rem" }}>
      <Card.Img variant="top" src={project?`${BASE_URL}/uploads/${project?.projectImage}`:projectPic} />
      <Card.Body>
        <Card.Title>{project.title}</Card.Title>
        
      </Card.Body>
    </Card>
    }

    <Modal size='lg' className='img-fluid' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Col md={6}>
                    <img className='img-fluid' src={project?`${BASE_URL}/uploads/${project?.projectImage}`:projectPic} style={{height:'200px'}} alt="project image" />
                </Col>
                <Col md={6}>
                  <h2>{project.title}</h2>
                 <p>Project Overview: {project.overview}</p>
                 <p>Language Used: <span className='fw-bolder'>{project.languages}</span></p>
                 <div className='mt-3'>
            <a className='me-5 btn' href={project.github} target='_blank'><i class="fa-brands fa-github fa-2x"></i></a>
            <a className='me-5 btn' href={project.website} target='_blank'><i class="fa-solid fa-link fa-2x"></i></a>
              </div>

                </Col>
            </Row>
        </Modal.Body>
       
      </Modal>

    </>
  )
}

export default ProjectCard