import React, { Component } from 'react'
import {
    CRow,
    CCol,
    CCard,
    CCardBody,
    CCardGroup,
    CCardHeader,
    CDataTable,
    CBadge,
    CDropdown,
    CDropdownDivider,
    CDropdownHeader,
    CDropdownItem,
    CDropdownMenu,
    CDropdownToggle
} from '@coreui/react'
import {
  CChartBar,
  CChartLine,
  CChartPie,
} from '@coreui/react-chartjs'

import userKPIData from '../../users/UserKPIData'
import Home from 'src/views/home/Home'

const getBadge = status => {
  switch (status) {
    case 'Hoàn thành đúng tiến độ': return 'success'
    case 'Đang thực hiện': return 'secondary'
    case 'Chưa hoàn thành': return 'warning'
    case 'Hoàn thành trễ tiến độ': return 'danger'
    default: return 'primary'
  }
}
const table_fields = ['Tên công việc','Ngày giờ hoàn thành', 'Vị trí làm việc', 'Trạng thái']
const fields = ['name','registered', 'role', 'status']

class Employee extends Component {
  render (){
    return (
        <CCardGroup>
        
       <CCol sm="8" className="mx-auto mt-3">
       <div className="mt-3" style={{fontSize: '3rem', textAlign: 'center' }}>
             Trang cá nhân 
         </div>
         <CRow className="mt-3">
         <div>
                <img className="ava mr-3" alt='logo' src='https://th.bing.com/th/id/Rbc87bba000f46443399fb857b29500ae?rik=6JlLSf%2fc8Gy4VQ&pid=ImgRaw' style={{height: '100px', width: '100px'}}/>
         </div>
         <div>
         Nhân viên: Nguyễn Văn A <br></br>
         ID nhân viên: HCL-07-01 <br></br>
         Bộ phận làm việc: Dây chuyền 01
         </div>
         </CRow>
        
         
         <CCard className="mt-3">
             <CCardHeader>
               Bảng thống kê công việc của cá nhân
             </CCardHeader>
             <CCardBody>
             <CDataTable
               items={userKPIData}
               fields={fields}
               striped
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
                   )
 
               }}
             />
             </CCardBody>
           </CCard>
         </CCol>
     </CCardGroup>
   
    );
  }
}

export default Employee;
