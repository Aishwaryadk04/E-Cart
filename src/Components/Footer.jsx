import React from 'react';
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <div
    style={{width:'100%',height:'300px'}} className='mt-2 d-flex flex-column justify-content-center align-items-center bg-primary text-light mt-5'>
   <div className="footer-div d-flex justify-content-evenly w-100 flex-wrap">
     <div className="website" style={{width:'400px'}}>
     <h4 className='mb-3'>
     <i class="fa-solid fa-truck-fast me-2"></i> E Cart
     </h4>
     <h6>
        Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.
     </h6>
     <h6>
           Code licensed Luminar, docs CC BY 3.0.
     </h6>
     <p>
          Currently v1.0.0.
     </p>    
 </div>
     <div className="links d-flex flex-column ">
       <h4 className='mb-3'>Links</h4>
       <Link to={'./'} style={{textDecoration:'none',color:'white'}} >Home</Link>
       <Link to={'./cart'} style={{textDecoration:'none',color:'white'}} >Cart</Link>
       <Link to={'./wishlist'} style={{textDecoration:'none',color:'white'}} >Wishlist</Link>

     </div>
     <div className="guides d-flex flex-column">
     <h4 className='mb-3'>Guides</h4>
       <Link to={'https://react.dev/'} style={{textDecoration:'none',color:'white'}} >React</Link>
       <Link to={'https://getbootstrap.com/'} style={{textDecoration:'none',color:'white'}} > Bootstrap</Link>
       <Link to={'https://www.npmjs.com/package/react-router-bootstrap'} style={{textDecoration:'none',color:'white'}} > Routing</Link>

     </div>
     <div className="contact ">
     <h4>Contact Us</h4>

       <div className="sub d-flex mt-3">
         <input type="text" className='form-control' placeholder='Enter your Email Id' />
         <button className='btn btn-warning ms-3'>Subscribe</button>
       </div>
       <div className="icons fs-4  d-flex justify-content-between mt-3 ">
       <Link to={'https://react.dev/'} style={{textDecoration:'none',color:'white'}} ><i className="fa-brands fa-twitter"></i></Link>
       <Link to={'https://getbootstrap.com/'} style={{textDecoration:'none',color:'white'}} > <i className="fa-brands fa-facebook"></i></Link>
       <Link to={'https://www.npmjs.com/package/react-router-bootstrap'} style={{textDecoration:'none',color:'white'}} > <i className="fa-brands fa-linkedin"></i></Link>
       <Link to={'https://www.npmjs.com/package/react-router-bootstrap'} style={{textDecoration:'none',color:'white'}} > <i className="fa-brands fa-instagram"></i></Link>
       <Link to={'https://www.npmjs.com/package/react-router-bootstrap'} style={{textDecoration:'none',color:'white'}} > <i className="fa-brands fa-tiktok"></i></Link>
       <Link to={'https://www.npmjs.com/package/react-router-bootstrap'} style={{textDecoration:'none',color:'white'}} > <i className="fa-brands fa-github"></i></Link>
    

       </div>
     </div>
   </div>
   <p>Copyright © 2023 E Cart. Build with React</p>
 </div> 
  )
}

export default Footer