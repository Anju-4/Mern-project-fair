import React, { useContext } from 'react'
import { Navbar, Container, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { tokenAuthorisationContext } from '../Contexts/TokenAuth'

function Header({ insideDashboard }) {
  const navigate = useNavigate()
  const {isAuthorized,setIsAuthorized} = useContext(tokenAuthorisationContext)

  const handleLogout = ()=>{
    // remove all existing user detail from browser
    sessionStorage.removeItem("existingUser")
    sessionStorage.removeItem("token")
    setIsAuthorized(false)
    // navigate to login page
    navigate('/')
  }
  return (
    <Navbar className="bg-success position-fixed top-0 w-100">
      <Container>
        <Navbar.Brand>
          <Link to={'/'} className='fs-4 ' style={{ textDecoration: 'none', color: 'white' }}>
            <i className="fa-brands fa-stack-overflow fa-bounce"></i>{' '}
            Project Fair
          </Link>
        </Navbar.Brand>
        {insideDashboard && <button onClick={handleLogout} className='btn btn-linkms-auto  fw-bolder text-primary fs-5 fw-bolder'>
          LOGOUT <i class="fa-solid fa-right-from-bracket"></i>

        </button>}
      </Container>
    </Navbar>
  )
}

export default Header