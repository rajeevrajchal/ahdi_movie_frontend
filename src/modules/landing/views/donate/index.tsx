import React, { useContext, useEffect, useRef } from 'react';
import './donate.scss';
import Layout from '../../../../hoc/layout';
import { $FIXME } from '../../../../constants';
import axios from 'axios';
import { Context } from '../../../../context';
import { ToasterStateInterface } from '../../../../components/shared/toaster/services/toasterReducer';
import { setToasterState } from '../../../../components/shared/toaster/services/toasterAction';

const Donate = () => {
  const [paid, setPaid] = React.useState(false);
  const [error, setError] = React.useState(null);
  const paypalRef = useRef<$FIXME>();
  const { dispatch } = useContext(Context);

  useEffect(() => {
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
                  value: 5.0,
                },
              },
            ],
          });
        },
        onApprove: async (data: $FIXME, actions: $FIXME) => {
          const order = await actions.order.capture();
          const api_url = process.env.REACT_APP_API_URL;
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
          setPaid(true);
        },
        onError: (err: $FIXME) => {
          setError(err), console.error(err);
        },
      })
      .render(paypalRef.current);
  }, []);
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
        <div className="heading text-center">
          <div className="label">
            <h1>Support the project</h1>
          </div>
          <div className="description mt-lg">
            <p>
              Thanks for deciding to support our project !. Thanks for being
              with so long and enjoy you time.{' '}
            </p>
          </div>

          <div className="mt-lg">
            {paid ? (
              <div className="heading_text">Payment successful.!</div>
            ) : (
              <div ref={paypalRef} />
            )}
          </div>
          {error && <p className="text-error">Payment Failed</p>}
        </div>
      </main>
    </Layout>
  );
};

export default Donate;
