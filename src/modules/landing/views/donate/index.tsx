import React from 'react';
import './donate.scss';
import DonationForm from './component/donationForm';
import Layout from '../../../../hoc/layout';

const Donate = () => {
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
        </div>
        <div className="payment-process mt-md w-30">
          <DonationForm />
        </div>
      </main>
    </Layout>
  );
};

export default Donate;
