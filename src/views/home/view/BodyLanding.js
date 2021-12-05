import React from 'react';
import '../style/BodyLanding.css';
import 'font-awesome/css/font-awesome.min.css';

import Logo from './Logo'
import Slogan from './Slogan/Slogan'
import document from './Slogan/document.png'
import kpi from './Slogan/kpi.png'
import employee from './Slogan/employee.png'
import assets from './Slogan/assets.png'
import task from './Slogan/task.png'

const BodyLanding = () => {
    return (
        <div>
            <section id="dx-intro" className="dx-container dx-intro-container">
                <div className="row p-center-h" id="gioithieu">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <h3 className="dx-sologan text-center">Garment Factory - Nhanh chóng và chính xác là trên hết</h3>
                        <ul className="dx-services">
                            <li className="dx-service-item"><i className="fa fa-check"></i>Môi trường làm việc số thân thiện và thuận tiện cho mọi nhân viên</li>
                            <li className="dx-service-item"><i className="fa fa-check"></i>Hỗ trợ lãnh đạo, quản lý các cấp theo dõi điều hành công việc thông qua hệ thống dashboard</li>
                            <li className="dx-service-item"><i className="fa fa-check"></i>Đánh giá KPI linh hoạt chính xác</li>
                            <li className="dx-service-item"><i className="fa fa-check"></i>Cơ chế giao việc thuận tiện, tối ưu giúp giảm bớt thời gian</li>
                        </ul>
                    </div>
                    <Logo/>
                </div>
            </section>
            <section id="dx-service" className="dx-container">
                <h3 className="text-center">Nhiệm vụ hàng đầu</h3>
                <p className="rule-content">Đảm bảo cung ứng đủ về số lượng, chất lượng của sản phẩm, phục vụ nhu cầu may mặc</p>
                <div className="row p-center">
                    <Slogan imgName={kpi} title={'KPI'} content={'Đảm bảo năng xuất tuyệt đối'} />
                    <Slogan imgName={document} title={'GIẤY TỜ'} content={'Đảm bảo sự minh bạch và hợp pháp'} />
                    <Slogan imgName={employee} title={'KHÁCH HÀNG'} content={'Tận tình với khách hàng, đảm bảo chất lượng dịch vụ'} />
                    <Slogan imgName={assets} title={'kpi'} content={'kpi'} />
                    <Slogan imgName={task} title={'CÔNG VIỆC'} content={'Hoàn thành với kết quả tốt nhất và thời gian chính xác nhất'} />
                </div>
            </section>
        </div>
    );
}

export default BodyLanding;
