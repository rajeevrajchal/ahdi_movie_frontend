import React, { useContext, useState } from 'react';
import Modal from '../../../../../../components/shared/modal';
import BtnLoading from '../../../../../../components/shared/btnLoading';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Context } from '../../../../../../context';
import { storeSchedule } from './services/scheduleAction';

const AddTimeSchedule = () => {
  const { state, dispatch } = useContext(Context);
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      slot: '',
      movieUUID: state.current_movie._id,
    },
    validationSchema: Yup.object({
      slot: Yup.string().required('Time slot is required'),
    }),
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      const res = await storeSchedule(
        dispatch,
        state.token,
        values,
        state.current_movie._id
      );
      if (res === 'success') {
        resetForm();
      }
      setLoading(false);
    },
  });
  return (
    <Modal title={'Add New Time'}>
      <div className="time-form">
        <div className="input-group">
          <div className="input-box">
            <input
              value={formik.values.slot}
              onChange={formik.handleChange}
              name="slot"
              type="datetime-local"
              placeholder="Time Slot"
            />
          </div>
          {formik.errors.slot && formik.touched.slot && (
            <div className="text-error mt-sm">{formik.errors.slot}</div>
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

export default AddTimeSchedule;
