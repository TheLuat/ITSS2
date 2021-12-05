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

const Modal = () => {

  const [formProduct, setFormProduct] = useState({
    name: '',
    yeu_cau: '',
    san_xuat: '',
    ngay_nhap_kho: '',
    content: '',

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
      ngay_nhap_kho: '',
      content: '',
      
    });
  }
const refreshPage=()=>{
  window.location.reload();
}
  setTimeout(function () {
    setMessage('');
  }, 6000);

  return (
    <>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
              <CRow>
                <CCol lg={8} md="8" >Thêm sản phẩm</CCol>
                <CCol className="float-right text-success" lg={4} md="4" >{message? message : ''}</CCol>
              </CRow>
            </CCardHeader>
            <CCardBody>
              <CForm onSubmit={(event)=>{handleSubmit(event)}} encType="multipart/form-data" className="form-horizontal">
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">Tên sản phẩm</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput
                      id="text-input"
                      name="text-input"
                      value={formProduct.name}
                      placeholder="Nhập tên sản phẩm"
                      onChange={(e) => {setFormProduct({...formProduct, name: e.target.value})}}
                      required
                    />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="yeu_cau">Số lượng yêu cầu</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput
                      custom name="yeu_cau"
                      id="yeu_cau"
                      placeholder='Số lượng'
                      required
                      value={formProduct.so_luong}
                      onChange={(e) => {setFormProduct({...formProduct, yeu_cau: e.target.value})}}
                    >
                      </CInput>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="san_xuat">Số lượng sản xuất được</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput
                      custom name="san_xuat"
                      id="san_xuat"
                      placeholder='Số lượng sản xuất được'
                      required
                      value={formProduct.san_xuat}
                      onChange={(e) => {setFormProduct({...formProduct, san_xuat: e.target.value})}}
                    >
                      </CInput>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="date-input">Ngày nhập kho</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput
                      type="date"
                      id="date-input"
                      name="date-input"
                      placeholder="date"
                      required
                      value={formProduct.ngay_nhap_kho}
                      onChange={(e) => {setFormProduct({...formProduct, ngay_nhap_kho: e.target.value})}}
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
                  <CCol className='d-flex' md="2">
                    <CButton type="submit" size="sm" color="primary" onClick={refreshPage}>
                      Save
                    </CButton>
                  </CCol>
                  <CCol md="2">
                    <CButton type="cancel" size="sm" color="danger" onClick={refreshPage}> Cancel</CButton>
                  </CCol>
                </CFormGroup>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
    </>
  )
}

export default Modal
