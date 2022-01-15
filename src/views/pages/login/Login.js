import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "src/contexts/AuthContexts";
import { useHistory } from "react-router";
import { Redirect } from "react-router";
import { Spinner } from "react-bootstrap";
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
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { useForm } from "react-hook-form";
import "./login.css";

import { mailformat } from "../../../constants";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const {
    authState: { authLoading, isAuthenticated },
  } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const history = useHistory();

  const onSubmit = async (data) => {
    setForm({ ...data });
    const loginData = await loginUser(data);
    history.push("/home/admin/");
    console.log(loginData);
  };
  const showBody = () => {
    if (authLoading) {
      return (
        <div className="d-flex justify-content-center mt-2">
          <Spinner animation="border" variant="info"></Spinner>
        </div>
      );
    } else if (isAuthenticated) {
      return <Redirect to="home/admin"></Redirect>;
    } else {
      return (
        <div className="c-app c-default-layout flex-row align-items-center">
          <CContainer>
            <CRow className="justify-content-center">
              <CCol md="8">
                <CCardGroup>
                  <CCard className="p-4 mx-5">
                    <CCardBody>
                      <CForm onSubmit={handleSubmit(onSubmit)}>
                        <h1 style={{ color: "aqua" }}>ログイン</h1>
                        <CInputGroup className="mb-3">
                          <CInputGroupPrepend>
                            <CInputGroupText>
                              <CIcon name="cil-user" />
                            </CInputGroupText>
                          </CInputGroupPrepend>
                          <input
                            {...register("email", {
                              required: true,
                              pattern: mailformat,
                            })}
                            type="email"
                            className="form-control"
                            placeholder="メールアドレス"
                          />
                          {errors?.email?.type === "required" && (
                            <span className="span_red">
                              メールアドレスは必須です
                            </span>
                          )}
                          {errors?.email?.type === "pattern" && (
                            <span className="span_red">
                              メールアドレスのフォーマットではありません
                            </span>
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
                            placeholder="パスワード"
                            {...register("password", {
                              required: true,
                              minLength: 4,
                            })}
                          />
                          {errors?.password?.type === "required" && (
                            <span className="span_red">これは必須です</span>
                          )}
                          {errors?.password?.type === "minLength" && (
                            <span className="span_red"></span>
                          )}
                        </CInputGroup>
                        <CRow>
                          <CCol xs="6">
                            <CButton
                              color="primary"
                              type="submit"
                              className="px-4"
                            >
                              ログイン
                            </CButton>
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
      );
    }
  };

  return <div>{showBody()}</div>;
};

export default Login;
