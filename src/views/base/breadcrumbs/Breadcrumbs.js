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
  CCollapse,
  CSelect,
} from '@coreui/react'
import {
  CIcon
} from '@coreui/icons-react'

import {Link} from 'react-router-dom';



const getBadge = status => {
  switch (status) {
    case 'Hoàn thành': return 'success'
    case 'Đang thực hiện': return 'secondary'
    default: return 'primary'
  }
}

const fields = [
  {
    key: 'name',
    label: 'Tên công việc'
  },
  {
    key: 'mana_unit',
    label: 'Đơn vị quản lý'
  },
  {
    key: 'coor_unit',
    label: 'Đơn vị phối hợp'
  },
  {
    key: 'performer',
    label: 'Người thực hiện'
  },
  {
    key: 'date',
    label: 'Thời gian'
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
  const [works, setWorks] = useState([]);

  useEffect(() => {
    const getData = () => {
      const listWork = JSON.parse(localStorage.getItem('listWork')) || [];

      setWorks(listWork);
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
    const datas = works;

    let index = datas.findIndex(work => work.id === id);

    if (index !== -1) {
      datas[index] = {...datas[index], status: value}

      setWorks([...datas]);
      localStorage.setItem('listWork', JSON.stringify(datas));
    }

  }

  const removeWork = (id) => {
    console.log(id);
    const datas = works;

    let index = datas.findIndex(work => work.id === id);

    if (index !== -1) {
      datas.splice(index, 1);
      setWorks([...datas]);
      localStorage.setItem('listWork', JSON.stringify(datas));
    }
  }

  return (
    <CRow>
      <CCol xs="24" lg="12">
        <CCard>
          <CCardHeader>
            Bảng công việc
          </CCardHeader>
          <CCardBody>
            <CDataTable
              items={works}
              fields={fields}
              sorter
              hover
              tableFilter
              itemsPerPageSelect
              itemsPerPage={5}
              pagination
              scopedSlots = {{
                'status':
                  (item)=>(
                    <td>
                      <CBadge color={getBadge(item.status)}>
                        {item.status}
                      </CBadge>
                    </td>
                  ),
                'show_details':
                  (item, index)=>{
                    return (
                      <td className="py-2">
                        <CButton
                          color="primary"
                          variant="outline"
                          shape="square"
                          size="sm"
                          onClick={()=>{toggleDetails(index)}}
                        >
                          {details.includes(index) ? 'Hide' : 'Show'}
                        </CButton>
                      </td>
                    )
                  },
                'details':
                    (item, index)=>{
                      return (
                      <CCollapse show={details.includes(index)}>
                        <CCardBody>
                          <CRow>
                            <CCol lg="4" md="4">
                              <CSelect
                                custom name="select"
                                value={item.status}
                                style={{'cursor': 'pointer'}}
                                onChange={(e) => {onChangeStatus(e.target.value, item.id)}}
                              >
                                <option value="" selected>Chọn trạng thái</option>
                                <option value="Mới tạo">Mới tạo</option>
                                <option value="Đang thực hiện">Đang thực hiện</option>
                                <option value="Hoàn thành">Hoàn thành</option>
                              </CSelect>
                            </CCol>
                            <CCol lg="1" md="4">
                              <CButton
                                size="sm"
                                color="warning"
                                className="ml-1 mt-1"
                              >
                                <Link
                                  to={`/home/base/edit/${item.id}`}
                                  className="d-flex"
                                  style={{'textDecoration': 'none', 'color': 'white'}}
                                >
                                  <CIcon className="mt-1 mx-2" name="cil-pencil" size="sm" />
                                  Sửa
                                </Link>
                              </CButton>
                            </CCol>
                            <CCol lg="1" md="4">
                              <CButton
                                size="sm"
                                color="danger"
                                className="ml-1 mt-1 d-flex"
                                onClick={()=> {removeWork(item.id)}}
                              >
                                <CIcon className="mt-1 mx-2" name="cil-trash" size="sm" />
                                Xoá
                              </CButton>
                            </CCol>
                          </CRow>
                        </CCardBody>
                      </CCollapse>
                    )
                  }
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Breadcrumbs
