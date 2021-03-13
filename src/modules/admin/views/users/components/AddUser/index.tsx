import React, { useContext, useState } from 'react';
import { UserEnum } from '../../../../../../enum/userEnum';
import BtnLoading from '../../../../../../components/shared/btnLoading';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { addUser } from './services/addUserApi';
import { Context } from '../../../../../../context';
import { closeModal } from '../../../../../../components/shared/modal/services/modalAction';
import { fetchUserList } from '../../views/list/services/userListApi';

const AddUser = () => {
  const [loading, setLoading] = useState(false);
  const { dispatch, state } = useContext(Context);
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      role: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().required('Email is required'),
      password: Yup.string().required('Password is required'),
      role: Yup.string().required('Role is required'),
    }),
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      const res = await addUser(dispatch, values, state.token);
      if (res === 'success') {
        resetForm();
        await fetchUserList(dispatch, state.token);
        dispatch(closeModal());
        setLoading(false);
      } else {
        setLoading(false);
      }
    },
  });
  return (
    <div className="add-new-user">
      <div className="input-group">
        <div className="input-box">
          <input
            value={formik.values.name}
            onChange={formik.handleChange}
            type="text"
            name="name"
            placeholder="User Name"
          />
        </div>
        {formik.errors.name && formik.touched.name && (
          <div className="text-error mt-sm">{formik.errors.name}</div>
        )}
      </div>
      <div className="input-group">
        <div className="input-box">
          <input
            value={formik.values.email}
            onChange={formik.handleChange}
            type="email"
            name="email"
            placeholder="User Email"
          />
        </div>
        {formik.errors.email && formik.touched.email && (
          <div className="text-error mt-sm">{formik.errors.email}</div>
        )}
      </div>
      <div className="input-group">
        <div className="input-box">
          <input
            value={formik.values.password}
            onChange={formik.handleChange}
            type="text"
            name="password"
            placeholder="User password"
          />
        </div>
        {formik.errors.password && formik.touched.password && (
          <div className="text-error mt-sm">{formik.errors.password}</div>
        )}
      </div>
      <div className="input-group">
        <div className="input-box">
          <select
            name="role"
            value={formik.values.role}
            onChange={formik.handleChange}
          >
            <option value="">Select Role</option>
            <option value={UserEnum.admin}>Admin</option>
            <option value={UserEnum.super_admin}>Super Admin</option>
          </select>
        </div>
        {formik.errors.role && formik.touched.role && (
          <div className="text-error mt-sm">{formik.errors.role}</div>
        )}
      </div>

      <div className="input-group">
        <div className="btn primary" onClick={() => formik.handleSubmit()}>
          {loading ? (
            <div className=" flex align-center items-center">
              <BtnLoading />
              <div className="description ml-md">Saving</div>
            </div>
          ) : (
            'Save'
          )}
        </div>
      </div>
    </div>
  );
};

export default AddUser;
