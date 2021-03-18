import React, { useContext, useState } from 'react';
import BtnLoading from '../../../../../components/shared/btnLoading';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { storeSuggestion } from '../services/suggestionApi';
import { closeModal } from '../../../../../components/shared/modal/services/modalAction';
import { Context } from '../../../../../context';

const Suggest = () => {
  const [loading, setLoading] = useState(false);
  const { dispatch } = useContext(Context);
  const formik = useFormik({
    initialValues: {
      name_movie: '',
      movie_reference: '',
    },
    validationSchema: Yup.object({
      name_movie: Yup.string().required('Movie name is required'),
    }),
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      const res = await storeSuggestion(dispatch, values);
      if (res.status === 'success') {
        resetForm();
        dispatch(closeModal());
      }
      setLoading(false);
    },
  });
  return (
    <>
      <div className="label">
        <h1 style={{ textAlign: 'center' }}>Suggest Your Movie</h1>
      </div>
      <div className="suggest w-30 mt-lg">
        <div className="input-group">
          <div className="input-box">
            <input
              value={formik.values.name_movie}
              onChange={formik.handleChange}
              name="name_movie"
              type="text"
              placeholder="Movie Name"
            />
          </div>
          {formik.errors.name_movie && formik.touched.name_movie && (
            <div className="text-error mt-sm">{formik.errors.name_movie}</div>
          )}
        </div>
        <div className="input-group">
          <div className="input-box">
            <input
              value={formik.values.movie_reference}
              onChange={formik.handleChange}
              name="movie_reference"
              type="text"
              placeholder="Reference Link"
            />
          </div>
          {formik.errors.movie_reference && formik.touched.movie_reference && (
            <div className="text-error mt-sm">
              {formik.errors.movie_reference}
            </div>
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
