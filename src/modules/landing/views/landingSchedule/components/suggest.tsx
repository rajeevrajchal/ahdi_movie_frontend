import React, { useState } from 'react';
import BtnLoading from '../../../../../components/shared/btnLoading';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Suggest = () => {
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: '',
      link: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Movie name is required'),
      link: Yup.string().required('Reference Link is required'),
    }),
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      await console.log(values);
      await resetForm();
      setLoading(false);
    },
  });
  return (
    <>
      <div className="label">
        <h1>Suggest Your Movie</h1>
      </div>
      <div className="suggest w-30 mt-lg">
        <div className="input-group">
          <div className="input-box">
            <input
              value={formik.values.name}
              onChange={formik.handleChange}
              name="name"
              type="text"
              placeholder="Movie Name"
            />
          </div>
          {formik.errors.name && formik.touched.name && (
            <div className="text-error mt-sm">{formik.errors.name}</div>
          )}
        </div>
        <div className="input-group">
          <div className="input-box">
            <input
              value={formik.values.link}
              onChange={formik.handleChange}
              name="link"
              type="text"
              placeholder="Reference Link"
            />
          </div>
          {formik.errors.link && formik.touched.link && (
            <div className="text-error mt-sm">{formik.errors.link}</div>
          )}
        </div>
        <div className="input-group">
          <div className="btn primary" onClick={() => formik.handleSubmit()}>
            {loading ? (
              <div className=" flex align-center items-center">
                <BtnLoading />
                <div className="description ml-md">Suggesting</div>
              </div>
            ) : (
              'Suggest'
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Suggest;
