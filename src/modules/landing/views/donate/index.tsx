import React, { useContext, useEffect, useRef, useState } from 'react';
import './donate.scss';
import Layout from '../../../../hoc/layout';
import { $FIXME } from '../../../../constants';
import axios from 'axios';
import { Context } from '../../../../context';
import { ToasterStateInterface } from '../../../../components/shared/toaster/services/toasterReducer';
import { setToasterState } from '../../../../components/shared/toaster/services/toasterAction';
import { Adsense } from '@ctrl/react-adsense';

const Donate = () => {
  const [paid, setPaid] = React.useState(false);
  const [amountError, setAmountError] = React.useState(false);
  const [screen, changeScreen] = React.useState('form');
  const [error, setError] = React.useState(null);
  const paypalRef = useRef<$FIXME>();
  const { dispatch } = useContext(Context);
  const [amount, setAmount] = useState('');
  const handleChange = (e: $FIXME) => {
    setAmount(e.target.value);
  };

  const handleSubmit = (e: $FIXME) => {
    e.preventDefault();
    if (!amount) {
      setAmountError(true);
    }
    changeScreen('confirm');
    // <div ref={paypalRef} />
  };

  useEffect(() => {
    if (screen === 'confirm') {
      const wind: $FIXME = window;
      wind.paypal
        .Buttons({
          createOrder: (data: $FIXME, actions: $FIXME) => {
            return actions.order.create({
              intent: 'CAPTURE',
              purchase_units: [
                {
                  description: 'Donation',
                  amount: {
                    currency_code: 'USD',
                    value: amount,
                  },
                },
              ],
            });
          },
          onApprove: async (data: $FIXME, actions: $FIXME) => {
            const order = await actions.order.capture();
            const api_url = process.env.REACT_APP_API_URL;
            setPaid(true);
            const body: $FIXME = {
              name: `${
                order.payer.name.given_name + ' ' + order.payer.name.surname
              }`,
              country_code: order.payer.address.country_code,
              email: order.payer.address.email_address,
              currency: order.purchase_units[0].amount.currency_code,
              amount: order.purchase_units[0].amount.value,
              payment_id: order.id,
            };
            await axios.post(`${api_url}donation`, body);
          },
          onError: (err: $FIXME) => {
            setError(err), console.error(err);
          },
        })
        .render(paypalRef.current);
    }
  }, [screen]);
  if (error) {
    const toaster: ToasterStateInterface = {
      appear: true,
      message: 'Payment Failed',
      title: 'Error',
      name: 'Donation.',
    };
    dispatch(setToasterState(toaster));
  }

  return (
    <Layout
      description={'Movie where you can enjoy your favourite shows.'}
      keywords={['movie', 'shows']}
      title={'Donation'}
    >
      <main className="donate flex column align-center items-center justify-center">
        <Adsense
          client="ca-pub-4591861188995436"
          slot="6710577704"
          style={{
            display: 'inline-block',
            height: 90,
            width: '70%',
            background: 'white',
          }}
          layout="in-article"
          format="fluid"
        />
        <div className="heading text-center mt-md mb-md">
          <div className="label">
            <h1>Support the project</h1>
          </div>
          <div className="description mt-lg">
            <p>
              Thanks for deciding to support our project !. Thanks for being
              with so long and enjoy you time.{' '}
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
                    <div
                      className="btn primary"
                      onClick={(e) => handleSubmit(e)}
                    >
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
        <Adsense
          client="ca-pub-4591861188995436"
          slot="6710577704"
          style={{
            display: 'inline-block',
            height: 90,
            width: '70%',
            background: 'white',
          }}
          layout="in-article"
          format="fluid"
        />
      </main>
    </Layout>
  );
};

export default Donate;
