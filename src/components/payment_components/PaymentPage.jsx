import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Payment from './Payment'; // Import your checkout form component

// Load your publishable key
const stripePromise = loadStripe('pk_test_51QIilmECmCACrbVG1RO5COv0zgcUV0mvdvzpsXK9KEuyR2aEghe4hfBMa7ZoW1ARNDRTlNsCnkk2cNwWrYMzvgpW00q8JD1UUs');

const PaymentPage = () => {
    return (
        <Elements stripe={stripePromise}>   
            <Payment/>
        </Elements>
    );
};

export default PaymentPage;
