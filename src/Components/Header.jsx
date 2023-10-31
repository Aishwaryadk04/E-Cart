import React from 'react';
import { Nav ,Navbar ,Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';

function Header() {
  return (
    <Navbar style={{zIndex:'1'}} expand="lg" className="bg-primary position-fixed top-0 w-100 mb-5">
    <Container>
      <Navbar.Brand><Link to={'/'} style={{textDecoration:'none',color:'white',fontWeight:'bold'}}><i class="fa-solid fa-truck-fast me-2"></i>E Cart</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link className='btn  border rounded' >
            <Link  to={'/wishlist'} className='d-flex align-items-center' style={{textDecoration:'none',color:'white',fontWeight:'bold'}}>
                 <i className="fa-solid fa-heart text-danger me-2"></i> Wishlist
          <Badge className='ms-2 rounded' bg="light">0</Badge>
          </Link>
          </Nav.Link>

          <Nav.Link className='btn  border rounded ms-3' >
            <Link  to={'/cart'} className='d-flex align-items-center' style={{textDecoration:'none',color:'white',fontWeight:'bold'}}>
                 <i className="fa-solid fa-cart-shopping text-success me-2"></i> Cart
          <Badge className='ms-2 rounded' bg="light">0</Badge>
          </Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header