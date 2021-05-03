import React, { useContext, useEffect, useRef, useState } from 'react';
import './donate.scss';
import Layout from '../../../../hoc/layout';
import { $FIXME } from '../../../../constants';
import axios from 'axios';
import { Context } from '../../../../context';
import { ToasterStateInterface } from '../../../../components/shared/toaster/services/toasterReducer';
import { setToasterState } from '../../../../components/shared/toaster/services/toasterAction';
import DonationBody from './container/donation_body';
import AdsContent from '../../components/ads/ads_content';

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
      <main className="donate flex align-center items-center justify-between">
        <div className="left_ads">
          <AdsContent />
        </div>
        <div className="flex-1">
          <DonationBody
            paid={paid}
            screen={screen}
            amount={amount}
            amountError={amountError}
            error={error}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            paypalRef={paypalRef}
          />
        </div>
        <div className="right_ads">
          <AdsContent />
        </div>
      </main>
    </Layout>
  );
};

export default Donate;
