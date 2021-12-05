import React from 'react';
import pharma from '../assets/pharma.jpeg';
import '../style/Logo.css';

const Logo = () => {
  return (
    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <img className="dx-intro-image" alt='logo' src={pharma} style={{borderRadius: 500}}/>
    </div>
  );
}

export default Logo;
