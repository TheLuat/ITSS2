/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import './FooterLanding.css';
import 'font-awesome/css/font-awesome.min.css';
import Facebook from './facebook.png';
import Google from './google-plus.png';
import Youtube from './youtube.png';
const FooterLanding = () => {
    return (
        <div id="footer">
            <section id="dx-footer" className="dx-container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <h4 className="text-center text-bold">Về chúng tôi</h4>
                        <p className='text-center'>Bài tập lớn nhóm HCI_07</p>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <h4 className="text-center text-bold">Đa phương tiện</h4>
                        <span className="p-center media">
                            <img className="dx-content1 image" alt="Image Facebook" src={Facebook}/>
                            <img className="dx-content1 image" alt="Image Google" src={Google}/>
                            <img className="dx-content1 image" alt="Image Youtube" src={Youtube}/>
                        </span>
                    </div>
                </div>
            </section>
            <footer className="dx-footer dx-container">
                <div className="copyright">Bản quyền © 2021 AS_HESPI_HCI_07 - All rights reserved</div>
            </footer>
        </div>
    );
}

export default FooterLanding;
