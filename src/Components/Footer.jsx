import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='d-flex justify-content-center align-items-center flex-column bg-success mt-5' style={{width:'100%',height:'300px'}}>
      <div className='footer-content d-flex justify-content-evenly w-100 flex-wrap'>
        <div className='w-50 website d-flex flex-column'>
        <h4 style={{color:'white'}}><i className="fa-brands fa-stack-overflow fa-bounce" style={{color: '#ffffff'}}></i>{' '}Project Fair</h4>
<h6 style={{color:'black'}}>
    Designed and built with all the love in the world by the  <br /> Media team with the help of our contributors.</h6>
    <h6 style={{color:'black'}}> Code licensed Media, docs CC BY 3.0.</h6>
<h6 style={{color:'black'}}>Currently v1.0.0.</h6>
        </div>
        <div className='links d-flex flex-column'>
            <h4 style={{color:'black'}}>Links</h4>
            <Link to={'/'} style={{textDecoration:'none',color:'white'}}> Home</Link>
            <Link to={'/login'} style={{textDecoration:'none',color:'white'}}>Login</Link>
            <Link to={'/register'} style={{textDecoration:'none',color:'white'}}>Register</Link>
        </div>
        <div className='guides d-flex flex-column'>
        <h4 style={{color:'black'}}>Guides</h4>
            <Link to={'https://react.dev/'} style={{textDecoration:'none',color:'white'}}>React</Link>
            <Link to={'https://react-bootstrap.github.io/'} style={{textDecoration:'none',color:'white'}}>React Bootstrap</Link>
            <Link to={'https://reactrouter.com/en/main'} style={{textDecoration:'none',color:'white'}}>Routing</Link>
        </div>
        <div className='contact d-flex flex-column'>
            <h4 style={{color:'black'}}>Contact Us</h4>
            <div>

            </div>
            <div>
            <Link to={'/'} className='mx-2' style={{textDecoration:'none',color:'white'}}><i className="fa-brands fa-linkedin" style={{color: '#ffffff'}}></i></Link>
            <Link to={'/'} className='mx-3' style={{textDecoration:'none',color:'white'}}>
            <i className="fa-brands fa-twitter" style={{textDecoration:'none',color:'white'}}></i></Link>
            <Link to={'/'} className='mx-3' style={{textDecoration:'none',color:'white'}}><i className="fa-brands fa-facebook-f" style={{textDecoration:'none',color:'white'}}></i></Link>
            <Link to={'/'} className='mx-2' style={{textDecoration:'none',color:'white'}}><i className="fa-regular fa-envelope" style={{textDecoration:'none',color:'white'}}></i></Link>
            
            </div>
        </div>

      </div>
      <p className='mt-5' style={{color:'black'}}>Copyright © 2023 Project Fair. Built with React.</p>
    </div>
  )
}

export default Footer