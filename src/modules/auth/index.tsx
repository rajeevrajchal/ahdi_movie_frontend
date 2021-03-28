import React, { useContext, useState } from 'react';
import BtnLoading from '../../components/shared/btnLoading';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Context } from '../../context';
import { loginUser } from './services/loginAction';
import { useHistory } from 'react-router-dom';
import './auth.scss';

const Auth = () => {
  const [loading, setLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { dispatch } = useContext(Context);
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().required('Name is required'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      const res = await loginUser(dispatch, values);
      if (res.status === 'success') {
        resetForm();
        history.push('/admin');
        setLoading(false);
      }
    },
  });
  return (
    <main className="auth flex justify-center items-center align-center">
      <div className="flex column flex-1 align-center items-center">
        <div className="label">
          <h1>Login</h1>
        </div>
        <div className="login-form w-30">
          <div className="input-group">
            <div className="input-box">
              <input
                value={formik.values.email}
                onChange={formik.handleChange}
                placeholder="Admin Email"
                type="email"
                name="email"
              />
            </div>
          </div>
          <div className="input-group">
            <div className="input-box flex align-center items-center">
              <input
                value={formik.values.password}
                onChange={formik.handleChange}
                placeholder={`${isVisible ? 'your password' : '******'}`}
                type={`${isVisible ? 'text' : 'password'}`}
                name="password"
              />
              <i
                onClick={() => setIsVisible(!isVisible)}
                className={`fa fa-eye pa-md pointer ${
                  isVisible ? 'fa-eye-slash' : 'fa-eye'
                }`}
                aria-hidden="true"
              ></i>
            </div>
          </div>
          <div className="input-group">
            <div className="btn primary" onClick={() => formik.handleSubmit()}>
              {loading ? (
                <div className=" flex align-center items-center">
                  <BtnLoading />
                  <div className="description ml-md">Logging</div>
                </div>
              ) : (
                'Login'
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Auth;
