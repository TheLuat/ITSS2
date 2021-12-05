import React from 'react';
import './../style/Navigation.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

import { Link } from 'react-router-dom';


const Navigation = () => {
    return (
      <div>
        <Navbar bg="primary" variant="dark" fixed='top'>
          <Link to="/" style={{'textDecoration': 'none', 'color': 'white'}}>
            <h2>Garment Factory</h2>
          </Link>
          <Nav className="ml-auto ml-fix" >
              <a href="#/#gioithieu"><span className='dx-options'>Giới thiệu</span></a>
              <a href="#/#footer"><span className='dx-options'>Liên hệ</span></a>
          </Nav>
          <Button variant="light"><a className='dx-auth' href="#/login">Đăng nhập</a></Button>
        </Navbar>
      </div>
    );
}

export default Navigation;
