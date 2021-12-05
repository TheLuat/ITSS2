import React, { useState }from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { useForm } from "react-hook-form";
import './login.css';

import { mailformat, } from '../../../constants';

const Login = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();
    const [form, setForm] = useState({
        email: '',
        password: '',
    });
    const onSubmit = data => {
      console.log(form);
      setForm({...data});
    };

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4 mx-5">
                <CCardBody>
                  <CForm onSubmit={handleSubmit(onSubmit)}>
                    <h1 style={{'color': 'aqua'}}>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <input
                          {...register("email", {
                              required: true,
                              pattern: mailformat
                          })}
                          type="email"
                          className="form-control"
                          placeholder="Enter email"
                      />
                      {errors?.email?.type === "required" && <span className="span_red">This field is required</span>}
                      {errors?.email?.type === "pattern" && (
                          <span className="span_red">Must be in correct email format</span>
                      )}
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <input
                          type="password"
                          className="form-control"
                          id="password"
                          placeholder="Enter password"
                          {...register("password", {
                              required: true,
                              minLength: 8,
                          })}
                      />
                      {errors?.password?.type === "required" && <span className="span_red">This field is required</span>}
                      {errors?.password?.type === "minLength" && (
                          <span className="span_red">Password must be at least 8 characters</span>
                      )}
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        <CButton color="primary" type="submit" className="px-4">Login</CButton>
                      </CCol>
                      <CCol xs="6" className="text-right">
                        <CButton color="link" className="px-0">Forgot password?</CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
