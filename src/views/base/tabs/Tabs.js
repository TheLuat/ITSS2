import React, { useState, useEffect } from 'react'
import {
  CBadge,
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CModal,
} from '@coreui/react'
import {
  CIcon
} from '@coreui/icons-react'

import { Link } from 'react-router-dom';
import Modal from './Modal';

const getBadge = status => {
  switch (status) {
    case 'Còn': return 'success'
    case 'Hết': return 'danger'
    default: return 'primary'
  }
}

const fields = [
  {
    key: 'name',
    label: 'Tên nguyên liệu'
  },
  {
    key: 'so_luong',
    label: 'Số lượng nhập',
    
  },
  {
    key: 'ngay_nhap',
    label: 'Ngày nhập kho'
  },
  {
    key: 'xuat_kho',
    label: 'Số lượng xuất kho',
  },
  {
    key: 'status',
    label: 'Trạng thái'
  },
  {
    key: 'show_details',
    label: '',
    _style: { width: '1%' },
    sorter: false,
    filter: false
  }
];


const Breadcrumbs = () => {

  const [details, setDetails] = useState([]);
  const [materials, setMaterials] = useState([]);
  const [state, setState] = useState({
    openExportForm: false,
    isOpen: false
  });

  useEffect(() => {
    const getData = () => {
      const listMaterials = JSON.parse(localStorage.getItem('listMaterials')) || [];

      setMaterials(listMaterials);
    }

    getData();
  }, []);

  const openModal = () => {
    setState({
      ...state,
      isOpen: true
    });
  }

  const removeMaterial = (id) => {
    const datas = materials;

    let index = datas.findIndex(material => material.id === id);

    if (index !== -1) {
      datas.splice(index, 1);
      setMaterials([...datas]);
      localStorage.setItem('listMaterials', JSON.stringify(datas));
    }
  }
  
  
  return (
    <CRow>
      <CCol xs="24" lg="12">
        <CCard>
          <CCardHeader className='d-flex'>
            Quản lý nguyên liệu
            <div className="ml-auto">
              <CButton color='primary' variant='outline' size='sm' onClick={openModal}>Thêm
              </CButton>
              <CModal show={state.isOpen} size='xl'>
                <br></br>
                <Modal />
              </CModal>
            </div>
          </CCardHeader>
          <CCardBody>
            <CDataTable
              items={materials}
              fields={fields}
              sorter
              hover
              tableFilter
              itemsPerPageSelect
              itemsPerPage={5}
              pagination
              scopedSlots={{
                'status':
                  (item) => {
                    if (item.so_luong > 0) {
                      item.status = 'Còn'
                    }
                    else item.status = 'Hết';
                    return (
                      <td>
                        <CBadge color={getBadge(item.status)}>
                          {item.status}
                        </CBadge>
                      </td>
                    )
                  },
                'show_details':
                  (item) => {
                    return (
                      <td className='d-flex'>
                        <CButton>
                          <Link
                            to={`/home/base/editMaterial/${item.id}`}>
                            <CIcon name="cil-pencil" size="sm" /></Link>
                        </CButton>
                          <CButton>
                          <Link
                            to={`/home/base/export/${item.id}`}>
                              <CIcon name='cil-cursor' size='sm'></CIcon>
                          </Link>
                          </CButton>
                        <CButton onClick={() => { removeMaterial(item.id) }}>
                          <CIcon name="cil-trash" size="sm"
                            style={{ 'textDecoration': 'none', 'color': 'red' }} />
                        </CButton>
                      </td>)
                  },
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Breadcrumbs
