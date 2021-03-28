import React, { FC, useContext, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Modal from '../../../../../../components/shared/modal';
import BtnLoading from '../../../../../../components/shared/btnLoading';
import { Context } from '../../../../../../context';
import { closeModal } from '../../../../../../components/shared/modal/services/modalAction';
import { storeMovie } from './services/movieAction';
import { $FIXME } from '../../../../../../constants';

interface NewMovieInterface {
  editMovie?: $FIXME;
  isEditMode?: boolean;
}

const NewMovie: FC<NewMovieInterface> = ({ editMovie, isEditMode }) => {
  const [loading, setLoading] = useState(false);
  const { state, dispatch } = useContext(Context);
  const formik = useFormik({
    initialValues: {
      name: editMovie ? editMovie.name : '',
      poster: editMovie ? editMovie.poster : '',
      rating: editMovie ? editMovie.rating : '',
      tomato_rating: editMovie ? editMovie.tomato_rating : '',
      language: editMovie ? editMovie.language : '',
      year: editMovie ? editMovie.year : '',
      duration: editMovie ? editMovie.duration : '',
      description: editMovie ? editMovie.description : '',
      genres: editMovie ? editMovie.genres : ['action', 'comedy'],
      uploader: state.user,
      uploaderUUID: state.user._id,
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      rating: Yup.string()
        .required('IMDb Rating is required')
        .max(10, 'Max number exceed.'),
      tomato_rating: Yup.string()
        .required('Tomato Meter is required')
        .max(10, 'Max number exceed.'),
      language: Yup.string().required('Language is required'),
      year: Yup.string().required('Year is required'),
      duration: Yup.string().required('Duration is required'),
      description: Yup.string().required('Description is required'),
    }),
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      const res = await storeMovie(
        dispatch,
        values,
        state.token,
        editMovie ? editMovie._id : ''
      );
      if (res === 'success') {
        resetForm();
        dispatch(closeModal());
      } else {
        setLoading(false);
      }
      setLoading(false);
    },
  });
  return (
    <Modal title={'Movie Information'}>
      <div className="modal-form">
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
              value={formik.values.poster}
              onChange={formik.handleChange}
              name="poster"
              type="text"
              placeholder="Movie Name"
            />
          </div>
          {formik.errors.poster && formik.touched.poster && (
            <div className="text-error mt-sm">{formik.errors.poster}</div>
          )}
        </div>
        <div className="flex justify-between">
          <div className="input-group flex-1">
            <div className="input-box">
              <input
                value={formik.values.rating}
                onChange={formik.handleChange}
                name="rating"
                type="number"
                min={0}
                max={10}
                placeholder="IMDb"
              />
            </div>
            {formik.errors.rating && formik.touched.rating && (
              <div className="text-error mt-sm">{formik.errors.rating}</div>
            )}
          </div>
          <div className="input-group flex-1 ml-md">
            <div className="input-box">
              <input
                value={formik.values.tomato_rating}
                onChange={formik.handleChange}
                name="tomato_rating"
                type="number"
                min={0}
                max={10}
                placeholder="Tomatometer"
              />
            </div>
            {formik.errors.tomato_rating && formik.touched.tomato_rating && (
              <div className="text-error mt-sm">
                {formik.errors.tomato_rating}
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-between">
          <div className="input-group flex-1">
            <div className="input-box">
              <input
                value={formik.values.duration}
                onChange={formik.handleChange}
                name="duration"
                type="number"
                min={1}
                placeholder="Duration"
              />
            </div>
            {formik.errors.duration && formik.touched.duration && (
              <div className="text-error mt-sm">{formik.errors.duration}</div>
            )}
          </div>
          <div className="input-group flex-1 ml-md">
            <div className="input-box">
              <input
                value={formik.values.year}
                onChange={formik.handleChange}
                name="year"
                min={1996}
                type="number"
                placeholder="Year"
              />
            </div>
            {formik.errors.year && formik.touched.year && (
              <div className="text-error mt-sm">{formik.errors.year}</div>
            )}
          </div>
        </div>
        <div className="input-group">
          <div className="input-box">
            <select
              value={formik.values.language}
              onChange={formik.handleChange}
              name="language"
            >
              <option value="en">English</option>
              <option value="np">Nepali</option>
              <option value="tur">Turkish</option>
            </select>
          </div>
          {formik.errors.language && formik.touched.language && (
            <div className="text-error mt-sm">{formik.errors.language}</div>
          )}
        </div>
        <div className="input-group">
          <div className="input-box">
            <textarea
              value={formik.values.description}
              onChange={formik.handleChange}
              name="description"
              placeholder="description"
            ></textarea>
          </div>
          {formik.errors.description && formik.touched.description && (
            <div className="text-error mt-sm">{formik.errors.description}</div>
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
              <>{isEditMode ? 'Upload' : 'Save'}</>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default NewMovie;
