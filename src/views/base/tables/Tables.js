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
import Modal from './Modal'


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
    label: 'Tên sản phẩm'
  },
  {
    key: 'yeu_cau',
    label: 'Số lượng yêu cầu'
  },
  {
    key: 'san_xuat',
    label: 'Số lượng sản xuất'
  },
  {
    key: 'ngay_nhap_kho',
    label: 'Ngày nhập kho'
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
  const [products, setProducts] = useState([]);
  const [state, setState] = useState({isOpen: false});

  useEffect(() => {
    const getData = () => {
      const listProducts = JSON.parse(localStorage.getItem('listProducts')) || [];

      setProducts(listProducts);
    }

    getData();
  }, []);

  const toggleDetails = (index) => {

    const position = details.indexOf(index)
    let newDetails = details.slice()
    if (position !== -1) {
      newDetails.splice(position, 1)
    } else {
      newDetails = [...details, index]
    }
    setDetails(newDetails)
  }

  const onChangeStatus = (value, id) => {
    const datas = products;

    let index = datas.findIndex(product => product.id === id);

    if (index !== -1) {
      datas[index] = { ...datas[index], status: value }

      setProducts([...datas]);
      localStorage.setItem('listProducts', JSON.stringify(datas));
    }

  }
  
  const openModal = () => {
    setState({
      ...state,
      isOpen: true
     });
  }

  const removeProduct = (id) => {
    const datas = products;

    let index = datas.findIndex(product => product.id === id);

    if (index !== -1) {
      datas.splice(index, 1);
      setProducts([...datas]);
      localStorage.setItem('listProducts', JSON.stringify(datas));
    }
  }
  
  return (
    <CRow>
      <CCol xs="24" lg="12">
        <CCard>
          <CCardHeader className='d-flex'>
            Quản lý sản phẩm
            <div className="ml-auto">
              <CButton color='primary' variant='outline' size='sm' onClick={openModal}>Thêm
              </CButton>
              <CModal className='m' show={state.isOpen} size='xl'>
                <br></br>
                <Modal/>
              </CModal>
            </div>
          </CCardHeader>
          <CCardBody>
            <CDataTable
              items={products}
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
                    else item.status = 'Hết'
                    return (
                      <td>
                        <CBadge color={getBadge(item.status)}>
                          {item.status}
                        </CBadge>
                      </td>
                    )
                  },
                'show_details':
                  (item, index) => {
                    return (
                      <td className='d-flex'>
                      <CButton>
                        <Link
                            to={`/home/base/editProduct/${item.id}`}>
                          <CIcon className="mt-1 mx-2" name="cil-pencil" size="sm" /></Link>
                      </CButton>
                      <CCol className="ml-auto">
                        <CButton onClick={() => { removeProduct(item.id) }}>
                          <CIcon name="cil-trash" size="sm"
                            style={{ 'textDecoration': 'none', 'color': 'red' }} />
                        </CButton>
                      </CCol>
                      </td>)
                  },
                // 'details':
                //     (item, index)=>{
                //       return (
                //       <CCollapse show={details.includes(index)}>
                //         <CCardBody>
                //           <CRow>
                //             <CCol lg="4" md="4">
                //               <CSelect
                //                 custom name="select"
                //                 value={item.status}
                //                 style={{'cursor': 'pointer'}}
                //                 onChange={(e) => {onChangeStatus(e.target.value, item.id)}}
                //               >
                //                 <option value="" selected>Chọn trạng thái</option>
                //                 <option value="Mới tạo">Mới tạo</option>
                //                 <option value="Đang thực hiện">Đang thực hiện</option>
                //                 <option value="Hoàn thành">Hoàn thành</option>
                //               </CSelect>
                //             </CCol>
                //             <CCol lg="1" md="4">
                //               <CButton
                //                 size="sm"
                //                 color="warning"
                //                 className="ml-1 mt-1"
                //               >
                //                 <Link
                //                   to={`/home/base/edit/${item.id}`}
                //                   className="d-flex"
                //                   style={{'textDecoration': 'none', 'color': 'white'}}
                //                 >
                //                   <CIcon className="mt-1 mx-2" name="cil-pencil" size="sm" />
                //                   Sửa
                //                 </Link>
                //               </CButton>
                //             </CCol>
                //             <CCol lg="1" md="4">
                //               <CButton
                //                 size="sm"
                //                 color="danger"
                //                 className="ml-1 mt-1 d-flex"
                //                 onClick={()=> {removeProduct(item.id)}}
                //               >
                //                 <CIcon className="mt-1 mx-2" name="cil-trash" size="sm" />
                //                 Xoá
                //               </CButton>
                //             </CCol>
                //           </CRow>
                //         </CCardBody>
                //       </CCollapse>
                //     )
                //   }
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Breadcrumbs
