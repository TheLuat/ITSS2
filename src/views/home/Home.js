import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './view/Navigation';
import BodyLanding from './view/BodyLanding';
import FooterLanding from './view/FooterLanding/FooterLanding';
class Home extends Component {
  render (){
    return (
      <div>
        <Navigation/>
        <BodyLanding/>
        <FooterLanding/>
      </div>
    );
  }
}

export default Home;
