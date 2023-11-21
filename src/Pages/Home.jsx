import React, { useEffect, useState } from 'react'
import {Row,Col} from 'react-bootstrap'
import titleimage from '../Assests/imagee.jpg'
import ProjectCard from '../Components/ProjectCard'
import { Link } from 'react-router-dom'

function Home() {
     const[loggedIn,setLoggedIn] = useState(false)
     useEffect(()=>{
      if(sessionStorage.getItem("token")){
        setLoggedIn(true)
      }else{
        setLoggedIn(false)
      }
     },[])
  return (
    <>
    {/* landing section */}
      <div style={{width:'100%',height:'100vh'}}
      className='bg-success container-fluid rounded'>
      <Row className='align-items-center p-5'>
        <Col sm={12} md={6}>
          <h1 className='fw-bolder text-light'><i  className="fa-brands fa-stack-overflow fa-bounce"></i>Project Fair</h1>
          <p>Project management is the use of specific knowledge, skills, tools and techniques to deliver something of value to people. Learn more here.We are an independent network in service of creativity. </p>
         { loggedIn?
         <Link to={'/dashboard'} className='btn btn-warning'>Manage Your Projects <i className='fa-solid fa-right-long fa-beat ms-2'></i> </Link>:

          <Link to={'/login'} className='btn btn-warning'>Start To Explore <i className='fa-solid fa-right-long fa-beat ms-2'></i> </Link>}
        </Col>
        <Col sm={12} md={6}>
          <img src={titleimage} alt="" />
        </Col>
      </Row>
      </div>
      {/* all projects */}
      <div className='all-projects mt-5'>
        <h1 className='text-center mb-5'>Explore our Projects</h1>
        <marquee scrollAmount={15}>
        <Row>
          <Col sm={12} md={6} lg={4}>
            <ProjectCard/>
          </Col>
         
        </Row>

        </marquee>
     <div className='text-center mt-5'><Link to={'/projects'}>View more projects</Link></div>
      </div>
    </>
  )
}

export default Home