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

  const [formMaterial, setFormMaterial] = useState({
    name: '',
    so_luong: '',
    ngay_nhap:'',
    xuat_kho: 0,
    content: '',
    force: false,
  });

  const [message, setMessage] = useState('');

  const {id} = useParams();

  useEffect(() => {
    if (id) {
      const listMaterials = JSON.parse(localStorage.getItem('listMaterials')) || [];
      if (listMaterials.length > 0) {
        const material = listMaterials.find(item => item.id === parseInt(id));
        setFormMaterial({...material});
      }
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    let material = formMaterial;
    const listMaterials = JSON.parse(localStorage.getItem('listMaterials')) || [];

    if (listMaterials.length > 0) {
      if (id) {
        const index = listMaterials.findIndex(item => item.id === parseInt(id));
        listMaterials[index] = {...material};
      } else {
        let id = listMaterials[listMaterials.length - 1].id;
        material.id = id+1;
        material.status = 'Mới tạo';

        listMaterials.push(material);
      }
    } else {
      material = {...material, id: 1, status: 'Mới tạo'};
      listMaterials.push(material);
    }

    localStorage.setItem('listMaterials', JSON.stringify(listMaterials));
    if (!id) resetForm();
    setMessage(!id?'Tạo thành công':'Sửa thành công');
  }

  const resetForm = () => {
    setFormMaterial({
      name: '',
      so_luong: '',
      date: '',
      content: '',
      force: true,
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
                <CCol lg={8} md="8">Thêm nguyên liệu</CCol>
                <CCol className="float-right text-success" lg={4} md="4" >{message? message : ''}</CCol>
              </CRow>
            </CCardHeader>
            <CCardBody>
              <CForm onSubmit={(event)=>{handleSubmit(event)}} encType="multipart/form-data" className="form-horizontal">
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">Tên nguyên liệu</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput
                      id="text-input"
                      name="text-input"
                      value={formMaterial.name}
                      placeholder="Nhập tên nguyên liệu"
                      onChange={(e) => {setFormMaterial({...formMaterial, name: e.target.value})}}
                      required
                    />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="so_luong">Số lượng</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput
                      custom name="so_luong"
                      id="so_luong"
                      required
                      value={formMaterial.so_luong}
                      placeholder='Số lượng'
                      onChange={(e) => {setFormMaterial({...formMaterial, so_luong: e.target.value})}}
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
                      id="ngay_nhap"
                      name="date-input"
                      placeholder="date"
                      required
                      value={formMaterial.ngay_nhap}
                      onChange={(e) => {setFormMaterial({...formMaterial, ngay_nhap: e.target.value})}}
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
                      value={formMaterial.content}
                      onChange={(e) => {setFormMaterial({...formMaterial, content: e.target.value})}}
                    />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol sm="2"> 
                    <CButton type="submit" size="xl" color="primary" onClick={refreshPage}>
                      Save</CButton>
                  </CCol>
                  <CCol sm="2"> 
                    <CButton onClick={refreshPage} type="reset" size="xl" color="danger">Cancel</CButton>
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
