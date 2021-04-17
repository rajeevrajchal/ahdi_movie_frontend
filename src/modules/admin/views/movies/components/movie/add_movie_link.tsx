import React, { useContext, useState } from 'react';
import Modal from '../../../../../../components/shared/modal';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Context } from '../../../../../../context';
import BtnLoading from '../../../../../../components/shared/btnLoading';
import { storeMovie } from './services/movieAction';
import { closeModal } from '../../../../../../components/shared/modal/services/modalAction';

const AddMovieLink = () => {
  const [loading, setLoading] = useState(false);
  const { state, dispatch } = useContext(Context);
  const formik = useFormik({
    initialValues: {
      ...state.current_movie,
      movie_link: '',
    },
    validationSchema: Yup.object({
      movie_link: Yup.string().required('Movie Link is required'),
    }),
    onSubmit: async (values, { resetForm }) => {
      console.log(values);
      setLoading(true);
      const res = await storeMovie(
        dispatch,
        values,
        state.token,
        state.current_movie._id
      );
      if (res === 'success') {
        resetForm();
        dispatch(closeModal());
      } else {
        setLoading(false);
      }
      resetForm();
      setLoading(false);
    },
  });
  return (
    <Modal title={'Add Movie Link'}>
      <div className="input-group">
        <div className="input-box">
          <input
            value={formik.values.movie_link}
            onChange={formik.handleChange}
            type="text"
            name="movie_link"
            placeholder="Movie Link iframe"
          />
        </div>
        {formik.errors.movie_link && formik.touched.movie_link && (
          <div className="text-error mt-sm">{formik.errors.movie_link}</div>
        )}
      </div>
      <div
        className="mt-sm ml-sm flex align-center items-center"
        style={{ color: '#cccccc', textTransform: 'lowercase' }}
      >
        <div
          style={{
            width: '20px',
            height: '20px',
            background: '#cccccc',
            borderRadius: '50%',
            textAlign: 'center',
            color: '#ffffff',
          }}
        >
          <i className="fa fa-info" aria-hidden="true"></i>
        </div>
        <h4 className="ml-md"> Movie Link must be iframe.</h4>
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
    </Modal>
  );
};
export default AddMovieLink;
