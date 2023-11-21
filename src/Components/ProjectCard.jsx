import React, { useState } from 'react'
import { Card, Col, Modal, Row } from 'react-bootstrap'
import projectPic from '../Assests/software.jpg'


function ProjectCard() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
     <Card onClick={handleShow} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={projectPic} />
      <Card.Body>
        <Card.Title>Project Title</Card.Title>
        
      </Card.Body>
    </Card>

    <Modal size='lg' className='img-fluid' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Col md={6}>
                    <img className='img-fluid' src={projectPic} style={{height:'200px'}} alt="project image" />
                </Col>
                <Col md={6}>
                  <h2>Project Title</h2>
                 <p>Project Overview: Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet delectus aliquam earum doloremque doloribus fuga itaque nam mollitia consectetur, similique totam! Ducimus illo officiis mollitia tempore.</p>
                 <p>Language Used: <span className='fw-bolder'>HTML,CSS,REACT</span></p>
                 <div className='mt-3'>
            <a className='me-5 btn' href="https://github.com/8086145529/E-cart" target='_blank'><i class="fa-brands fa-github fa-2x"></i></a>
            <a className='me-5 btn' href="https://e-cart-seven-ashen.vercel.app/" target='_blank'><i class="fa-solid fa-link fa-2x"></i></a>
              </div>

                </Col>
            </Row>
        </Modal.Body>
       
      </Modal>

    </>
  )
}

export default ProjectCard