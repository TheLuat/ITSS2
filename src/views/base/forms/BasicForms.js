/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
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


const BasicForms = () => {

  const [form, setForm] = useState({
    name: '',
    mana_unit: '',
    coor_unit: '',
    performer: '',
    approver: '',
    consultants: '',
    observer: '',
    date: '',
    content: '',
    force: false,
    priority_level: '',
  });

  const [message, setMessage] = useState('');

  const {id} = useParams();

  useEffect(() => {
    if (id) {
      const listWork = JSON.parse(localStorage.getItem('listWork')) || [];
      if (listWork.length > 0) {
        const work = listWork.find(item => item.id === parseInt(id));
        setForm({...work});
      }
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    let work = form;
    const listWork = JSON.parse(localStorage.getItem('listWork')) || [];

    if (listWork.length > 0) {
      if (id) {
        const index = listWork.findIndex(item => item.id === parseInt(id));
        listWork[index] = {...work};
      } else {
        let id = listWork[listWork.length - 1].id;
        work.id = id+1;
        work.status = 'Mới tạo';

        listWork.push(work);
      }
    } else {
      work = {...work, id: 1, status: 'Mới tạo'};
      listWork.push(work);
    }

    localStorage.setItem('listWork', JSON.stringify(listWork));
    if (!id) resetForm();
    setMessage(!id?'Tạo thành công':'Sửa thành công');
  }

  const resetForm = () => {
    setForm({
      name: '',
      mana_unit: '',
      coor_unit: '',
      performer: '',
      approver: '',
      consultants: '',
      observer: '',
      date: '',
      content: '',
      force: true,
      priority_level: '',
    });
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
                <CCol lg={8} md="8" >{!id? 'Thêm công việc' : 'Sửa công việc'}</CCol>
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
                      value={form.name}
                      placeholder="Nhập tên công việc"
                      onChange={(e) => {setForm({...form, name: e.target.value})}}
                      required
                    />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Đơn vị quản lí công việc</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CSelect
                      custom name="select"
                      id="select"
                      required
                      value={form.mana_unit}
                      onChange={(e) => {setForm({...form, mana_unit: e.target.value})}}
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
                </CFormGroup>
                <CFormGroup row>
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
                </CFormGroup>
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
                      value={form.date}
                      onChange={(e) => {setForm({...form, date: e.target.value})}}
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
                      value={form.content}
                      onChange={(e) => {setForm({...form, content: e.target.value})}}
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
                        setForm({...form, force: e.target.checked});
                      }}
                    />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
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
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="2">
                    <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Submit</CButton>
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

export default BasicForms
