/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Slogan.css';
const Sologan = ({imgName, title, content}) => {
    return (
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div className="dx-card">
                <div className="dx-card-header">
                    <img className="service-image" src={imgName}/>
                </div>
                <div className="dx-card-body">
                    <h4>{title}</h4>
                    <p>{content}</p>
                </div>
            </div>
        </div>            
    );
} 

export default Sologan;