import React, { FC } from 'react';
import { $FIXME } from '../../../../../constants';

interface DonationBodyInterface {
  paid: boolean;
  screen: string;
  amount: string;
  amountError: boolean;
  error: boolean | null;
  handleChange: (e: $FIXME) => void;
  handleSubmit: (e: $FIXME) => void;
  paypalRef: $FIXME;
}

const DonationBody: FC<DonationBodyInterface> = (props) => {
  const {
    paid,
    error,
    screen,
    amount,
    amountError,
    handleChange,
    handleSubmit,
    paypalRef,
  } = props;
  return (
    <div className="heading text-center mt-md mb-md">
      <div className="label">
        <h1>Support the project</h1>
      </div>
      <div className="description mt-lg">
        <p>
          Thanks for deciding to support our project !. Thanks for being with so
          long and enjoy you time.{' '}
        </p>
      </div>

      <div className="mt-lg flex flex-centered">
        {paid ? (
          <div className="heading_text">Payment successful.!</div>
        ) : (
          <div className="w-60">
            {screen === 'form' && (
              <>
                <div className="input-group mb-md">
                  <div className="input-box">
                    <input
                      type="number"
                      placeholder={'your amount'}
                      value={amount}
                      onChange={(e: $FIXME) => handleChange(e)}
                    />
                  </div>
                  {amountError && <p>Amount is Required</p>}
                </div>
                <div className="btn primary" onClick={(e) => handleSubmit(e)}>
                  Proceed
                </div>
              </>
            )}
            {screen === 'confirm' && <div ref={paypalRef} />}
          </div>
        )}
      </div>
      {error && <p className="text-error">Payment Failed</p>}
    </div>
  );
};

export default DonationBody;
