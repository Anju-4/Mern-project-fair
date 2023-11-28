import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { Col, Row } from 'react-bootstrap'
import ProjectCard from '../Components/ProjectCard'
import { allProjectsAPI } from '../Services/allAPI'

function Projects() {
  const[allprojects,setAllProjects]= useState([])
  const[searchKey,setSearchKey] = useState("")
  const getAllProjects = async()=>{
    if(sessionStorage.getItem("token")){
      const token = sessionStorage.getItem("token")
      const reqHeader = {
        "Content-Type":"application/json","Authorization":`Bearer ${token}`

      }
      const result = await allProjectsAPI(searchKey,reqHeader)
      if(result.status===200){
        setAllProjects(result.data)
      }else{
        console.log(result);
      }
    }
  }
  useEffect(()=>{
     getAllProjects()
  },[searchKey])
  return (
    <>
      <Header />
      <div style={{ marginTop: '100px' }} className='projects'>
        <h1 className='text-center mb-5'>All Projects</h1>
        <div className='d-flex justify-content-center align-items-center w-100'>
          <div className='d-flex w-50 border rounded'>
            <input type="text" className='form-control' placeholder='Search projects by technologies' onChange={e=>setSearchKey(e.target.value)} />
            <div className='d-flex justify-content-center align-items-center w-25'>
              <i class="fa-solid fa-magnifying-glass fa-rotate-90"></i>

            </div>       
                      </div>

        </div>
        <Row className='mt-5 container-fluid ms-4'>
         {allprojects?.length>0?allprojects?.map(project=>(
           <Col sm={12} md={6} lg={4}>
           <ProjectCard project={project} />
         </Col>
         )) : <p className='text-danger text-center fw-bolder'>Please Login!!</p>
        }
        </Row>
      </div>
    </>
  )
}

export default Projects