import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import BtnLoading from '../../../../../components/shared/btnLoading';

const DonationForm = () => {
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      amount: '',
    },
    validationSchema: Yup.object({
      amount: Yup.string().required(
        'We be happy if you filed this with some value. '
      ),
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
      <div className="input-group">
        <div className="input-box">
          <input
            value={formik.values.amount}
            onChange={formik.handleChange}
            name="amount"
            type="number"
            max={0.1}
            placeholder={'Amount in USD'}
          />
        </div>
        {formik.errors.amount && formik.touched.amount && (
          <div className="text-error mt-sm">{formik.errors.amount}</div>
        )}
      </div>
      <div className="input-group">
        <div className="btn secondary" onClick={() => formik.handleSubmit()}>
          {loading ? (
            <div className=" flex align-center items-center">
              <BtnLoading />
              <div className="description ml-md">Donating</div>
            </div>
          ) : (
            'Donate'
          )}
        </div>
      </div>
    </>
  );
};

export default DonationForm;
