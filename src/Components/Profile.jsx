import React, { useState } from 'react'
import { Collapse } from 'react-bootstrap';


function Profile() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className=' mt-5'>
       <div className='d-flex border rounded p-3 justify-content-between ' >
            <h3>Profile</h3>
           <button    onClick={() => setOpen(!open)} className='btn btn-outline-info '><i class="fa-solid fa-chevron-down"></i></button>
    
       </div>
       
     <Collapse in={open}>
         <div className='row shadow p-5 justify-content-center mt-4'>
          {/* upload image */}
          <label className='text-center'>
              <input style={{display:'none'}} type="file" />
              <img width={'200px'} height={'200px'} src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" />
          </label>
           <div className='mt-3'>
            <input type="text" className='form-control' placeholder='Github' />
           </div>
  
           <div className='mt-3'>
            <input type="text" className='form-control' placeholder='LinkedIn' />
           </div>
           <div className='mt-3 text-center d-grid'>
              <button className='btn btn-warning'>Update</button>
           </div>
  
         </div>
     </Collapse>
        </div>  
    </>
  )
}

export default Profile