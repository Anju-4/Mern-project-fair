import React from 'react'
import { Navbar, Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header({ insideDashboard }) {
  return (
    <Navbar className="bg-success position-fixed top-0 w-100">
      <Container>
        <Navbar.Brand>
          <Link to={'/'} className='fs-4 ' style={{ textDecoration: 'none', color: 'white' }}>
            <i className="fa-brands fa-stack-overflow fa-bounce"></i>{' '}
            Project Fair
          </Link>
        </Navbar.Brand>
        {insideDashboard && <div className='btn btn-linkms-auto  fw-bolder text-primary fs-5 fw-bolder'>
          LOGOUT <i class="fa-solid fa-right-from-bracket"></i>

        </div>}
      </Container>
    </Navbar>
  )
}

export default Header