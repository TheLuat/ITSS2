/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormGroup,
  CTextarea,
  CInput,
  CLabel,
  CSelect,
  CRow,
  CSwitch
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const Jumbotrons = () => {

  const [formProduct, setFormProduct] = useState({
    name: '',
    so_luong: '',
    // coor_unit: '',
    // performer: '',
    // approver: '',
    // consultants: '',
    // observer: '',
    date: '',
    content: '',
    force: false,
    // priority_level: '',
  });

  const [message, setMessage] = useState('');

  const {id} = useParams();

  useEffect(() => {
    if (id) {
      const listProducts = JSON.parse(localStorage.getItem('listProducts')) || [];
      if (listProducts.length > 0) {
        const product = listProducts.find(item => item.id === parseInt(id));
        setFormProduct({...product});
      }
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    let product = formProduct;
    const listProducts = JSON.parse(localStorage.getItem('listProducts')) || [];

    if (listProducts.length > 0) {
      if (id) {
        const index = listProducts.findIndex(item => item.id === parseInt(id));
        listProducts[index] = {...product};
      } else {
        let id = listProducts[listProducts.length - 1].id;
        product.id = id+1;
        product.status = 'Mới tạo';

        listProducts.push(product);
      }
    } else {
      product = {...product, id: 1, status: 'Mới tạo'};
      listProducts.push(product);
    }

    localStorage.setItem('listProducts', JSON.stringify(listProducts));
    if (!id) resetForm();
    setMessage(!id?'Tạo thành công':'Sửa thành công');
  }

  const resetForm = () => {
    setFormProduct({
      name: '',
      so_luong: '',
      // coor_unit: '',
      // performer: '',
      // approver: '',
      // consultants: '',
      // observer: '',
      date: '',
      content: '',
      force: true,
      // priority_level: '',
    });
  }

  const toTable=()=>{
    window.location.assign('#/home/base/tables')
  }

  setTimeout(function () {
    setMessage('');
  }, 6000);

  return (
    <>
      <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
              <CRow>
                <CCol lg={8} md="8" >{!id? 'Thêm sản phẩm' : 'Sửa thông tin sản phẩm'}</CCol>
                <CCol className="float-right text-success" lg={4} md="4" >{message? message : ''}</CCol>
              </CRow>
            </CCardHeader>
            <CCardBody>
              <CForm onSubmit={(event)=>{handleSubmit(event)}} encType="multipart/form-data" className="form-horizontal">
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">Tên công việc</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput
                      id="text-input"
                      name="text-input"
                      value={formProduct.name}
                      placeholder="Nhập tên công việc"
                      onChange={(e) => {setFormProduct({...formProduct, name: e.target.value})}}
                      required
                    />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="so_luong">Số lượng</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    {/* <CSelect */}
                    <CInput
                      custom name="so_luong"
                      id="so_luong"
                      required
                      value={formProduct.so_luong}
                      onChange={(e) => {setFormProduct({...formProduct, so_luong: e.target.value})}}
                    >
                      {/* <option value="" selected>Chọn đơn vị</option>
                      <option value="HCI 01">HCI 01</option>
                      <option value="HCI 02">HCI 02</option>
                      <option value="HCI 03">HCI 03</option>
                      <option value="HCI 04">HCI 04</option>
                      <option value="HCI 05">HCI 05</option>
                      <option value="HCI 06">HCI 06</option>
                      <option value="HCI 07">HCI 07</option>
                    </CSelect> */}</CInput>
                  </CCol>
                </CFormGroup>
                {/* <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Đơn vị phối hợp thực hiện</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CSelect
                      custom name="select"
                      id="select"
                      required
                      value={form.coor_unit}
                      onChange={(e) => {setForm({...form, coor_unit: e.target.value})}}
                    >
                      <option value="" selected>Chọn đơn vị</option>
                      <option value="HCI 01">HCI 01</option>
                      <option value="HCI 02">HCI 02</option>
                      <option value="HCI 03">HCI 03</option>
                      <option value="HCI 04">HCI 04</option>
                      <option value="HCI 05">HCI 05</option>
                      <option value="HCI 06">HCI 06</option>
                      <option value="HCI 07">HCI 07</option>
                    </CSelect>
                  </CCol>
                </CFormGroup><br/><br/>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">Người thực hiện</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput
                      id="text-input"
                      name="text-input"
                      required
                      placeholder="Nhập người thực hiện"
                      value={form.performer}
                      onChange={(e) => {setForm({...form, performer: e.target.value})}}
                    />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">Người phê duyệt</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput
                      id="text-input"
                      name="text-input"
                      placeholder="Nhập người phê duyệt"
                      required
                      value={form.approver}
                      onChange={(e) => {setForm({...form, approver: e.target.value})}}
                    />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">Người tư vấn</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput
                      id="text-input"
                      name="text-input"
                      placeholder="Nhập người tư vấn"
                      required
                      value={form.consultants}
                      onChange={(e) => {setForm({...form, consultants: e.target.value})}}
                    />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">Người quan sát</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput
                      id="text-input"
                      name="text-input"
                      placeholder="Nhập người quan sát"
                      required
                      value={form.observer}
                      onChange={(e) => {setForm({...form, observer: e.target.value})}}
                    />
                  </CCol>
                </CFormGroup> */}
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="date-input">Ngày thực hiện</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput
                      type="date"
                      id="date-input"
                      name="date-input"
                      placeholder="date"
                      required
                      value={formProduct.date}
                      onChange={(e) => {setFormProduct({...formProduct, date: e.target.value})}}
                    />
                  </CCol>
                </CFormGroup>

                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="textarea-input">Nội dung</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CTextarea
                      name="textarea-input"
                      id="textarea-input"
                      rows="9"
                      placeholder="Content..."
                      required
                      value={formProduct.content}
                      onChange={(e) => {setFormProduct({...formProduct, content: e.target.value})}}
                    />
                  </CCol>
                </CFormGroup><br/><br/>


                <CFormGroup row>
                  <CCol tag="label" sm="3" className="col-form-label">
                    Bắt buộc
                  </CCol>
                  <CCol sm="9">
                    <CSwitch
                      className="mr-1"
                      color="primary"
                      defaultChecked
                      onChange={(e) => {
                        setFormProduct({...formProduct, force: e.target.checked});
                      }}
                    />
                  </CCol>
                </CFormGroup>
                {/* <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Mức độ ưu tiên</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CSelect
                      custom name="select"
                      id="select"
                      required
                      value={form.priority_level}
                      onChange={(e) => {setForm({...form, priority_level: e.target.value})}}
                    >
                      <option value="Thấp">Thấp</option>
                      <option value="Trung bình">Trung bình</option>
                      <option value="Tiêu chuẩn">Tiêu chuẩn</option>
                      <option value="Cao">Cao</option>
                      <option value="Khẩn cấp">Khẩn cấp</option>
                    </CSelect>
                  </CCol>
                </CFormGroup> */}
                <CFormGroup row>
                  <CCol md="2">
                    <CButton type="submit" size="sm" color="primary" onClick={toTable}>
                      <CIcon name="cil-scrubber" /> Submit</CButton>
                  </CCol>
                  <CCol md="2">
                    <CButton onClick={resetForm} type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton>
                  </CCol>
                </CFormGroup>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>

      </CRow>
    </>
  )
}

export default Jumbotrons
