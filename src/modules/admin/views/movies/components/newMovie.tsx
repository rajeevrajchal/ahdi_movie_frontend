import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Modal from '../../../../../components/shared/modal';
import BtnLoading from '../../../../../components/shared/btnLoading';

const NewMovie = () => {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      thumb_nail: '',
      imdb: '',
      tomato_meter: '',
      language: '',
      year: '',
      length: '',
      description: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      imdb: Yup.string()
        .required('IMDb Rating is required')
        .max(10, 'Max number exceed.'),
      tomato_meter: Yup.string()
        .required('Tomato Meter is required')
        .max(10, 'Max number exceed.'),
      language: Yup.string().required('Language is required'),
      year: Yup.string().required('Year is required'),
      length: Yup.string().required('Length is required'),
      description: Yup.string().required('Description is required'),
    }),
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      console.log(values);
      resetForm();
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
              value={formik.values.thumb_nail}
              onChange={formik.handleChange}
              name="thumb_nail"
              type="file"
              placeholder="Movie Name"
            />
          </div>
          {formik.errors.thumb_nail && formik.touched.thumb_nail && (
            <div className="text-error mt-sm">{formik.errors.thumb_nail}</div>
          )}
        </div>
        <div className="flex justify-between">
          <div className="input-group flex-1">
            <div className="input-box">
              <input
                value={formik.values.imdb}
                onChange={formik.handleChange}
                name="imdb"
                type="number"
                min={0}
                max={10}
                placeholder="IMDb"
              />
            </div>
            {formik.errors.imdb && formik.touched.imdb && (
              <div className="text-error mt-sm">{formik.errors.imdb}</div>
            )}
          </div>
          <div className="input-group flex-1 ml-md">
            <div className="input-box">
              <input
                value={formik.values.tomato_meter}
                onChange={formik.handleChange}
                name="tomato_meter"
                type="number"
                min={0}
                max={10}
                placeholder="Tomatometer"
              />
            </div>
            {formik.errors.tomato_meter && formik.touched.tomato_meter && (
              <div className="text-error mt-sm">
                {formik.errors.tomato_meter}
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-between">
          <div className="input-group flex-1">
            <div className="input-box">
              <input
                value={formik.values.length}
                onChange={formik.handleChange}
                name="length"
                type="number"
                min={1}
                placeholder="Length"
              />
            </div>
            {formik.errors.length && formik.touched.length && (
              <div className="text-error mt-sm">{formik.errors.length}</div>
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
              'Save'
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default NewMovie;
